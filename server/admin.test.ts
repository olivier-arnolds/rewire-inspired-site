import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { appRouter } from "./routers";
import { getDb, createContactSubmission } from "./db";
import { contactSubmissions } from "../drizzle/schema";
import { eq } from "drizzle-orm";
import type { TrpcContext } from "./_core/context";
import { TRPCError } from "@trpc/server";

describe("Admin Dashboard Access Control", () => {
  let db: Awaited<ReturnType<typeof getDb>>;

  beforeAll(async () => {
    db = await getDb();
    if (!db) {
      throw new Error("Database not available for testing");
    }

    // Create test submission
    await createContactSubmission({
      name: "Admin Test User",
      email: "admin-test@example.com",
      company: "Test Company",
      message: "This is a test message for admin dashboard",
    });
  });

  it("should allow admin users to access contact submissions", async () => {
    const adminContext: TrpcContext = {
      user: {
        id: 1,
        openId: "admin-open-id",
        name: "Admin User",
        email: "admin@example.com",
        loginMethod: "oauth",
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
        lastSignedIn: new Date(),
      },
      req: {} as any,
      res: {} as any,
    };

    const caller = appRouter.createCaller(adminContext);
    const submissions = await caller.contact.list();

    expect(submissions).toBeDefined();
    expect(Array.isArray(submissions)).toBe(true);
    expect(submissions.length).toBeGreaterThan(0);

    // Verify test submission is in the list
    const testSubmission = submissions.find(
      (sub) => sub.email === "admin-test@example.com"
    );
    expect(testSubmission).toBeDefined();
    expect(testSubmission?.name).toBe("Admin Test User");
  });

  it("should deny non-admin users access to contact submissions", async () => {
    const userContext: TrpcContext = {
      user: {
        id: 2,
        openId: "user-open-id",
        name: "Regular User",
        email: "user@example.com",
        loginMethod: "oauth",
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
        lastSignedIn: new Date(),
      },
      req: {} as any,
      res: {} as any,
    };

    const caller = appRouter.createCaller(userContext);

    await expect(caller.contact.list()).rejects.toThrow();
  });

  it("should deny unauthenticated users access to contact submissions", async () => {
    const guestContext: TrpcContext = {
      user: null,
      req: {} as any,
      res: {} as any,
    };

    const caller = appRouter.createCaller(guestContext);

    await expect(caller.contact.list()).rejects.toThrow();
  });

  afterAll(async () => {
    if (!db) return;
    await db
      .delete(contactSubmissions)
      .where(eq(contactSubmissions.email, "admin-test@example.com"));
  });
});
