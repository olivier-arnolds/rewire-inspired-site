import Parser from "rss-parser";

/**
 * RSS Feed Service
 * Fetches AI industry news from curated RSS feeds
 */

export interface RSSFeedItem {
  title: string;
  source: string;
  summary: string;
  fullContent: string;
  category: string;
  url: string;
  publishedDate: Date;
  feedSource: string;
}

// Curated list of AI news RSS feeds
const RSS_FEEDS = [
  {
    url: "https://techcrunch.com/category/artificial-intelligence/feed/",
    source: "TechCrunch",
    category: "Technology",
  },
  {
    url: "https://venturebeat.com/category/ai/feed/",
    source: "VentureBeat",
    category: "Strategy",
  },
  {
    url: "https://www.artificialintelligence-news.com/feed/",
    source: "AI News",
    category: "Industry",
  },
];

const parser = new Parser({
  timeout: 10000,
  headers: {
    "User-Agent": "Eclectik-AI-News-Aggregator/1.0",
  },
});

/**
 * Fetch news items from a single RSS feed
 */
async function fetchFromFeed(
  feedConfig: typeof RSS_FEEDS[0]
): Promise<RSSFeedItem[]> {
  try {
    const feed = await parser.parseURL(feedConfig.url);
    
    return feed.items.slice(0, 5).map((item) => ({
      title: item.title || "Untitled",
      source: feedConfig.source,
      summary: extractSummary(item.contentSnippet || item.content || ""),
      fullContent: item.content || item.contentSnippet || "",
      category: feedConfig.category,
      url: item.link || "",
      publishedDate: item.pubDate ? new Date(item.pubDate) : new Date(),
      feedSource: feedConfig.url,
    }));
  } catch (error) {
    console.error(`Error fetching from ${feedConfig.source}:`, error);
    return [];
  }
}

/**
 * Extract a clean summary from content (first 200 chars)
 */
function extractSummary(content: string): string {
  // Remove HTML tags
  const text = content.replace(/<[^>]*>/g, "");
  // Trim to 200 chars and add ellipsis
  return text.length > 200 ? text.substring(0, 200).trim() + "..." : text;
}

/**
 * Fetch news from all configured RSS feeds
 */
export async function fetchAllRSSFeeds(): Promise<RSSFeedItem[]> {
  const promises = RSS_FEEDS.map((feed) => fetchFromFeed(feed));
  const results = await Promise.all(promises);
  
  // Flatten and sort by date (newest first)
  const allItems = results.flat();
  allItems.sort(
    (a, b) => b.publishedDate.getTime() - a.publishedDate.getTime()
  );
  
  return allItems;
}

/**
 * Get list of configured RSS feed sources
 */
export function getRSSFeedSources() {
  return RSS_FEEDS.map((feed) => ({
    source: feed.source,
    url: feed.url,
    category: feed.category,
  }));
}
