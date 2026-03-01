/*
 * Contact Form Router — Handles contact form submissions and notifies the owner.
 */

import { z } from "zod";
import { publicProcedure, router } from "./_core/trpc";
import { notifyOwner } from "./_core/notification";

export const contactRouter = router({
  submit: publicProcedure
    .input(
      z.object({
        name: z.string().min(1, "Name is required").max(100, "Name is too long"),
        email: z.string().email("Please enter a valid email address"),
        subject: z.string().min(1, "Subject is required").max(200, "Subject is too long"),
        message: z.string().min(10, "Message must be at least 10 characters").max(5000, "Message is too long"),
        category: z.enum(["general", "scam-report", "tech-help", "feedback", "other"]),
      })
    )
    .mutation(async ({ input }) => {
      const categoryLabels: Record<string, string> = {
        general: "General Inquiry",
        "scam-report": "Scam Report",
        "tech-help": "Tech Help Request",
        feedback: "Feedback",
        other: "Other",
      };

      const title = `[Contact] ${categoryLabels[input.category] || input.category}: ${input.subject}`;
      const content = [
        `**From:** ${input.name}`,
        `**Email:** ${input.email}`,
        `**Category:** ${categoryLabels[input.category] || input.category}`,
        `**Subject:** ${input.subject}`,
        ``,
        `**Message:**`,
        input.message,
      ].join("\n");

      const sent = await notifyOwner({ title, content });

      return {
        success: true,
        notified: sent,
        message: sent
          ? "Thank you for reaching out! We've received your message and will get back to you soon."
          : "Thank you for your message! We've recorded it, though our notification system is temporarily unavailable. We'll still review your submission.",
      };
    }),
});
