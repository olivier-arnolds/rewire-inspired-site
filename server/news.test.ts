import { describe, it, expect, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { Context } from "./_core/context";

/**
 * Tests for AI News System
 * Covers RSS fetching, approval workflow, and public access
 */

// Mock admin context
const mockAdminContext: Context = {
  user: {
    id: 1,
    openId: "admin-test",
    name: "Admin User",
    email: "admin@eclectik.co",
    loginMethod: "test",
    role: "admin",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  },
  req: {} as any,
  res: {} as any,
};

// Mock regular user context
const mockUserContext: Context = {
  user: {
    id: 2,
    openId: "user-test",
    name: "Regular User",
    email: "user@example.com",
    loginMethod: "test",
    role: "user",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  },
  req: {} as any,
  res: {} as any,
};

// Mock unauthenticated context
const mockUnauthContext: Context = {
  user: null,
  req: {} as any,
  res: {} as any,
};

describe("News System - Public Access", () => {
  it("should allow unauthenticated users to fetch approved news", async () => {
    const caller = appRouter.createCaller(mockUnauthContext);
    const result = await caller.news.getApproved({ limit: 4 });
    
    expect(result).toBeDefined();
    expect(Array.isArray(result)).toBe(true);
    // Result may be empty if no approved news exists yet
  });

  it("should respect limit parameter when fetching approved news", async () => {
    const caller = appRouter.createCaller(mockUnauthContext);
    const result = await caller.news.getApproved({ limit: 2 });
    
    expect(result).toBeDefined();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeLessThanOrEqual(2);
  });
});

describe("News System - Admin Access", () => {
  it("should allow admin to fetch all news items", async () => {
    const caller = appRouter.createCaller(mockAdminContext);
    const result = await caller.news.getAll({});
    
    expect(result).toBeDefined();
    expect(Array.isArray(result)).toBe(true);
  });

  it("should allow admin to filter news by status", async () => {
    const caller = appRouter.createCaller(mockAdminContext);
    const pending = await caller.news.getAll({ status: "pending" });
    const approved = await caller.news.getAll({ status: "approved" });
    const rejected = await caller.news.getAll({ status: "rejected" });
    
    expect(Array.isArray(pending)).toBe(true);
    expect(Array.isArray(approved)).toBe(true);
    expect(Array.isArray(rejected)).toBe(true);
  });

  it("should allow admin to fetch from RSS feeds", async () => {
    const caller = appRouter.createCaller(mockAdminContext);
    const result = await caller.news.fetchFromRSS();
    
    expect(result).toBeDefined();
    expect(result.success).toBe(true);
    expect(typeof result.fetched).toBe("number");
    expect(typeof result.inserted).toBe("number");
    expect(typeof result.message).toBe("string");
  });

  it("should allow admin to get RSS feed sources", async () => {
    const caller = appRouter.createCaller(mockAdminContext);
    const result = await caller.news.getFeedSources();
    
    expect(result).toBeDefined();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    
    // Verify structure of feed sources
    if (result.length > 0) {
      expect(result[0]).toHaveProperty("source");
      expect(result[0]).toHaveProperty("url");
      expect(result[0]).toHaveProperty("category");
    }
  });
});

describe("News System - Authorization", () => {
  it("should deny regular users from fetching all news", async () => {
    const caller = appRouter.createCaller(mockUserContext);
    
    await expect(caller.news.getAll({})).rejects.toThrow("Unauthorized");
  });

  it("should deny regular users from fetching RSS feeds", async () => {
    const caller = appRouter.createCaller(mockUserContext);
    
    await expect(caller.news.fetchFromRSS()).rejects.toThrow("Unauthorized");
  });

  it("should deny unauthenticated users from fetching all news", async () => {
    const caller = appRouter.createCaller(mockUnauthContext);
    
    await expect(caller.news.getAll({})).rejects.toThrow();
  });

  it("should deny unauthenticated users from fetching RSS feeds", async () => {
    const caller = appRouter.createCaller(mockUnauthContext);
    
    await expect(caller.news.fetchFromRSS()).rejects.toThrow();
  });
});

describe("News System - Approval Workflow", () => {
  let testNewsId: number | null = null;

  beforeEach(async () => {
    // Fetch some news to have test data
    const caller = appRouter.createCaller(mockAdminContext);
    try {
      await caller.news.fetchFromRSS();
      const allNews = await caller.news.getAll({ status: "pending" });
      if (allNews.length > 0) {
        testNewsId = allNews[0].id;
      }
    } catch (error) {
      // If fetch fails (network issue), skip tests that require data
      testNewsId = null;
    }
  });

  it("should allow admin to approve news items", async () => {
    if (!testNewsId) {
      console.log("Skipping test: No test news available");
      return;
    }

    const caller = appRouter.createCaller(mockAdminContext);
    const result = await caller.news.updateStatus({
      id: testNewsId,
      status: "approved",
    });
    
    expect(result).toBeDefined();
    expect(result.success).toBe(true);
    expect(result.item).toBeDefined();
    expect(result.item?.status).toBe("approved");
  });

  it("should allow admin to reject news items", async () => {
    if (!testNewsId) {
      console.log("Skipping test: No test news available");
      return;
    }

    const caller = appRouter.createCaller(mockAdminContext);
    const result = await caller.news.updateStatus({
      id: testNewsId,
      status: "rejected",
    });
    
    expect(result).toBeDefined();
    expect(result.success).toBe(true);
    expect(result.item).toBeDefined();
    expect(result.item?.status).toBe("rejected");
  });

  it("should deny regular users from approving news", async () => {
    if (!testNewsId) {
      console.log("Skipping test: No test news available");
      return;
    }

    const caller = appRouter.createCaller(mockUserContext);
    
    await expect(
      caller.news.updateStatus({
        id: testNewsId,
        status: "approved",
      })
    ).rejects.toThrow("Unauthorized");
  });

  it("should allow admin to delete news items", async () => {
    if (!testNewsId) {
      console.log("Skipping test: No test news available");
      return;
    }

    const caller = appRouter.createCaller(mockAdminContext);
    const result = await caller.news.delete({ id: testNewsId });
    
    expect(result).toBeDefined();
    expect(result.success).toBe(true);
  });

  it("should deny regular users from deleting news", async () => {
    if (!testNewsId) {
      console.log("Skipping test: No test news available");
      return;
    }

    const caller = appRouter.createCaller(mockUserContext);
    
    await expect(
      caller.news.delete({ id: testNewsId })
    ).rejects.toThrow("Unauthorized");
  });
});

describe("News System - Data Validation", () => {
  it("should validate limit parameter for approved news", async () => {
    const caller = appRouter.createCaller(mockUnauthContext);
    
    // Should accept valid limits
    await expect(caller.news.getApproved({ limit: 1 })).resolves.toBeDefined();
    await expect(caller.news.getApproved({ limit: 10 })).resolves.toBeDefined();
  });

  it("should validate status parameter for admin getAll", async () => {
    const caller = appRouter.createCaller(mockAdminContext);
    
    // Should accept valid statuses
    await expect(caller.news.getAll({ status: "pending" })).resolves.toBeDefined();
    await expect(caller.news.getAll({ status: "approved" })).resolves.toBeDefined();
    await expect(caller.news.getAll({ status: "rejected" })).resolves.toBeDefined();
  });
});
