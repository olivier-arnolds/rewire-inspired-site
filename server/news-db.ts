import { eq, desc } from "drizzle-orm";
import { getDb } from "./db";
import { newsItems, type InsertNewsItem, type NewsItem } from "../drizzle/schema";

/**
 * News database helpers
 */

/**
 * Get all approved news items (for public display)
 */
export async function getApprovedNews(limit = 4): Promise<NewsItem[]> {
  const db = await getDb();
  if (!db) return [];
  
  return db
    .select()
    .from(newsItems)
    .where(eq(newsItems.status, "approved"))
    .orderBy(desc(newsItems.publishedDate))
    .limit(limit);
}

/**
 * Get all news items with optional status filter (for admin)
 */
export async function getAllNews(status?: "pending" | "approved" | "rejected"): Promise<NewsItem[]> {
  const db = await getDb();
  if (!db) return [];
  
  if (status) {
    return db
      .select()
      .from(newsItems)
      .where(eq(newsItems.status, status))
      .orderBy(desc(newsItems.createdAt));
  }
  
  return db
    .select()
    .from(newsItems)
    .orderBy(desc(newsItems.createdAt));
}

/**
 * Create a new news item
 */
export async function createNewsItem(item: InsertNewsItem): Promise<NewsItem | null> {
  const db = await getDb();
  if (!db) return null;
  
  const [newItem] = await db.insert(newsItems).values(item).$returningId();
  const [created] = await db.select().from(newsItems).where(eq(newsItems.id, newItem.id));
  return created || null;
}

/**
 * Update news item status (approve/reject)
 */
export async function updateNewsStatus(
  id: number,
  status: "approved" | "rejected"
): Promise<NewsItem | null> {
  const db = await getDb();
  if (!db) return null;
  
  await db.update(newsItems).set({ status }).where(eq(newsItems.id, id));
  const [updated] = await db.select().from(newsItems).where(eq(newsItems.id, id));
  return updated || null;
}

/**
 * Delete a news item
 */
export async function deleteNewsItem(id: number): Promise<boolean> {
  const db = await getDb();
  if (!db) return false;
  
  await db.delete(newsItems).where(eq(newsItems.id, id));
  return true;
}

/**
 * Check if a news item with the same URL already exists
 */
export async function newsItemExists(url: string): Promise<boolean> {
  const db = await getDb();
  if (!db) return false;
  
  const [existing] = await db
    .select()
    .from(newsItems)
    .where(eq(newsItems.url, url))
    .limit(1);
  return !!existing;
}

/**
 * Bulk insert news items (skip duplicates)
 */
export async function bulkInsertNews(items: InsertNewsItem[]): Promise<number> {
  let insertedCount = 0;
  
  for (const item of items) {
    const exists = await newsItemExists(item.url);
    if (!exists) {
      await createNewsItem(item);
      insertedCount++;
    }
  }
  
  return insertedCount;
}
