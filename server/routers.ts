import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { createContactSubmission, getAllContactSubmissions } from "./db";
import { z } from "zod";
import { notifyOwner } from "./_core/notification";
import { sendContactFormNotification } from "./email";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
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
