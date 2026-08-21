import type { RequestHandler } from "express";
import mysql, { type ResultSetHeader } from "mysql2/promise";
import { z } from "zod";

export const majlisWaitlistInput = z.object({
  email: z.string().trim().email().max(320),
  name: z.string().trim().min(2).max(120).optional(),
  interest: z.string().trim().min(2).max(500).optional(),
});

export type MajlisWaitlistEntry = z.infer<typeof majlisWaitlistInput>;
export type WaitlistSubmissionResult = "created" | "exists";
export type WaitlistRepository = (entry: MajlisWaitlistEntry) => Promise<WaitlistSubmissionResult>;

function isDuplicateEntry(error: unknown): boolean {
  return typeof error === "object" && error !== null && "code" in error && (error as { code?: string }).code === "ER_DUP_ENTRY";
}

export async function saveMajlisWaitlistEntry(entry: MajlisWaitlistEntry): Promise<WaitlistSubmissionResult> {
  if (!process.env.DATABASE_URL) {
    throw new Error("Majlis waitlist database is not configured");
  }

  const connection = await mysql.createConnection(process.env.DATABASE_URL);
  try {
    const [result] = await connection.execute<ResultSetHeader>(
      "INSERT INTO majlis_waitlist (email, name, interest) VALUES (?, ?, ?)",
      [entry.email.toLowerCase(), entry.name || null, entry.interest || null],
    );

    return result.affectedRows > 0 ? "created" : "exists";
  } catch (error) {
    if (isDuplicateEntry(error)) return "exists";
    throw error;
  } finally {
    await connection.end();
  }
}

export function createMajlisWaitlistHandler(repository: WaitlistRepository): RequestHandler {
  return async (req, res) => {
    const input = majlisWaitlistInput.safeParse(req.body);
    if (!input.success) {
      res.status(400).json({
        ok: false,
        message: "Please provide a valid email and complete any entered fields.",
      });
      return;
    }

    try {
      const result = await repository(input.data);
      res.status(result === "created" ? 201 : 200).json({
        ok: true,
        status: result,
        message: result === "created" ? "You are on the Majlis waitlist." : "This email is already on the Majlis waitlist.",
      });
    } catch (error) {
      console.error("[Majlis waitlist] Failed to save entry", error);
      res.status(500).json({
        ok: false,
        message: "We could not save your place right now. Please try again shortly.",
      });
    }
  };
}
