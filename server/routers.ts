import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { createContactSubmission, getAllContactSubmissions } from "./db";
import { z } from "zod";
import { notifyOwner } from "./_core/notification";
import { sendContactFormNotification } from "./email";
import { 
  getApprovedNews, 
  getAllNews, 
  createNewsItem, 
  updateNewsStatus, 
  deleteNewsItem,
  bulkInsertNews 
} from "./news-db";
import { fetchAllRSSFeeds, getRSSFeedSources } from "./rss-service";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  user: router({
    me: publicProcedure.query(opts => opts.ctx.user),
  }),
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  news: router({
    // Public: Get approved news items for homepage
    getApproved: publicProcedure
      .input(z.object({ limit: z.number().optional().default(4) }))
      .query(async ({ input }) => {
        return await getApprovedNews(input.limit);
      }),

    // Admin: Get all news items with optional status filter
    getAll: protectedProcedure
      .input(z.object({ status: z.enum(["pending", "approved", "rejected"]).optional() }))
      .query(async ({ ctx, input }) => {
        if (ctx.user.role !== "admin") {
          throw new Error("Unauthorized");
        }
        return await getAllNews(input.status);
      }),

    // Admin: Fetch fresh news from RSS feeds
    fetchFromRSS: protectedProcedure.mutation(async ({ ctx }) => {
      if (ctx.user.role !== "admin") {
        throw new Error("Unauthorized");
      }

      const rssItems = await fetchAllRSSFeeds();
      const insertedCount = await bulkInsertNews(
        rssItems.map((item) => ({
          title: item.title,
          source: item.source,
          summary: item.summary,
          fullContent: item.fullContent,
          category: item.category,
          url: item.url,
          publishedDate: item.publishedDate,
          feedSource: item.feedSource,
          status: "pending" as const,
        }))
      );

      return { 
        success: true, 
        fetched: rssItems.length, 
        inserted: insertedCount,
        message: `Fetched ${rssItems.length} items, inserted ${insertedCount} new items` 
      };
    }),

    // Admin: Update news item status (approve/reject)
    updateStatus: protectedProcedure
      .input(
        z.object({
          id: z.number(),
          status: z.enum(["approved", "rejected"]),
        })
      )
      .mutation(async ({ ctx, input }) => {
        if (ctx.user.role !== "admin") {
          throw new Error("Unauthorized");
        }
        const updated = await updateNewsStatus(input.id, input.status);
        return { success: true, item: updated };
      }),

    // Admin: Delete news item
    delete: protectedProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ ctx, input }) => {
        if (ctx.user.role !== "admin") {
          throw new Error("Unauthorized");
        }
        await deleteNewsItem(input.id);
        return { success: true };
      }),

    // Admin: Get configured RSS feed sources
    getFeedSources: protectedProcedure.query(async ({ ctx }) => {
      if (ctx.user.role !== "admin") {
        throw new Error("Unauthorized");
      }
      return getRSSFeedSources();
    }),
  }),

  contact: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(1, "Name is required"),
          email: z.string().email("Invalid email address"),
          company: z.string().optional(),
          message: z.string().min(1, "Message is required"),
        })
      )
      .mutation(async ({ input }) => {
        const submittedAt = new Date();
        
        // Save to database
        await createContactSubmission({
          name: input.name,
          email: input.email,
          company: input.company || null,
          message: input.message,
        });

        // Send email notification
        await sendContactFormNotification({
          name: input.name,
          email: input.email,
          company: input.company,
          message: input.message,
          submittedAt,
        });

        // Notify owner about new submission
        await notifyOwner({
          title: "New Contact Form Submission",
          content: `Name: ${input.name}\nEmail: ${input.email}\nCompany: ${input.company || "N/A"}\nMessage: ${input.message}`,
        });

        return { success: true };
      }),
    list: protectedProcedure.query(async ({ ctx }) => {
      // Only allow admin users to view submissions
      if (ctx.user.role !== "admin") {
        throw new Error("Unauthorized");
      }
      return await getAllContactSubmissions();
    }),
  }),
});

export type AppRouter = typeof appRouter;
