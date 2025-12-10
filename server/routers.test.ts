import { describe, it, expect, beforeAll } from "vitest";
import { appRouter } from "./routers";
import { getDb } from "./db";
import { contactSubmissions } from "../drizzle/schema";
import { eq } from "drizzle-orm";
import type { TrpcContext } from "./_core/context";

describe("Contact Form Integration", () => {
  let db: Awaited<ReturnType<typeof getDb>>;

  beforeAll(async () => {
    db = await getDb();
    if (!db) {
      throw new Error("Database not available for testing");
    }
  });

  it("should save contact form submission to database", async () => {
    const mockContext: TrpcContext = {
      user: null,
      req: {} as any,
      res: {} as any,
    };
    
    const caller = appRouter.createCaller(mockContext);

    const testData = {
      name: "Test User",
      email: "test@example.com",
      company: "Test Company",
      message: "This is a test message",
    };

    // Submit the form
    const result = await caller.contact.submit(testData);

    expect(result.success).toBe(true);

    // Verify it was saved to the database
    if (!db) throw new Error("DB not available");
    
    const submissions = await db
      .select()
      .from(contactSubmissions)
      .where(eq(contactSubmissions.email, testData.email))
      .limit(1);

    expect(submissions.length).toBeGreaterThan(0);
    expect(submissions[0].name).toBe(testData.name);
    expect(submissions[0].email).toBe(testData.email);
    expect(submissions[0].company).toBe(testData.company);
    expect(submissions[0].message).toBe(testData.message);

    // Clean up test data
    await db
      .delete(contactSubmissions)
      .where(eq(contactSubmissions.email, testData.email));
  });

  it("should validate required fields", async () => {
    const mockContext: TrpcContext = {
      user: null,
      req: {} as any,
      res: {} as any,
    };
    
    const caller = appRouter.createCaller(mockContext);

    // Test missing name
    await expect(
      caller.contact.submit({
        name: "",
        email: "test@example.com",
        message: "Test message",
      })
    ).rejects.toThrow();

    // Test invalid email
    await expect(
      caller.contact.submit({
        name: "Test User",
        email: "invalid-email",
        message: "Test message",
      })
    ).rejects.toThrow();

    // Test missing message
    await expect(
      caller.contact.submit({
        name: "Test User",
        email: "test@example.com",
        message: "",
      })
    ).rejects.toThrow();
  });
});
