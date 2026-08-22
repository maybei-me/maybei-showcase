import type { RequestHandler } from "express";
import mysql, { type ResultSetHeader } from "mysql2/promise";
import { z } from "zod";

export const contactMessageInput = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(320),
  company: z.string().trim().max(160).optional(),
  message: z.string().trim().min(10).max(5000),
  sourcePage: z.string().trim().min(1).max(160).optional().default("contact"),
  privacyConsent: z.literal(true),
});

export type ContactMessageEntry = z.infer<typeof contactMessageInput>;
export type ContactMessageRepository = (entry: ContactMessageEntry) => Promise<"created">;

export async function saveContactMessage(entry: ContactMessageEntry): Promise<"created"> {
  if (!process.env.DATABASE_URL) throw new Error("Contact message database is not configured");

  const connection = await mysql.createConnection(process.env.DATABASE_URL);
  try {
    const [result] = await connection.execute<ResultSetHeader>(
      "INSERT INTO contact_messages (name, email, company, message, source_page) VALUES (?, ?, ?, ?, ?)",
      [entry.name, entry.email.toLowerCase(), entry.company || null, entry.message, entry.sourcePage],
    );

    if (result.affectedRows < 1) throw new Error("Contact message was not stored");
    return "created";
  } finally {
    await connection.end();
  }
}

export function createContactMessageHandler(repository: ContactMessageRepository): RequestHandler {
  return async (req, res) => {
    const input = contactMessageInput.safeParse(req.body);
    if (!input.success) {
      res.status(400).json({
        ok: false,
        message: "Please provide your name, a valid email, a message and privacy acknowledgement.",
      });
      return;
    }

    try {
      await repository(input.data);
      res.status(201).json({
        ok: true,
        status: "created",
        message: "Thank you — your message has been received.",
      });
    } catch (error) {
      console.error("[Contact] Failed to save message", error);
      res.status(500).json({
        ok: false,
        message: "We could not save your message right now. Please try again shortly.",
      });
    }
  };
}
