import { describe, expect, it } from "vitest";
import { createMajlisWaitlistHandler, majlisWaitlistInput } from "./majlisWaitlist";

function responseSpy() {
  let statusCode = 200;
  let body: unknown;
  const response = {
    status: (nextStatus: number) => {
      statusCode = nextStatus;
      return response;
    },
    json: (nextBody: unknown) => {
      body = nextBody;
      return response;
    },
  };
  return { response, read: () => ({ statusCode, body }) };
}

describe("Majlis waitlist", () => {
  it("normalizes valid public waitlist input", () => {
    expect(majlisWaitlistInput.parse({ email: " Person@Example.com ", name: " Maya ", interest: " Looking for a team " })).toEqual({
      email: "Person@Example.com",
      name: "Maya",
      interest: "Looking for a team",
    });
  });

  it("rejects invalid waitlist input", () => {
    expect(majlisWaitlistInput.safeParse({ email: "not-an-email" }).success).toBe(false);
  });

  it("returns a created confirmation through the handler", async () => {
    const handler = createMajlisWaitlistHandler(async () => "created");
    const spy = responseSpy();
    await handler({ body: { email: "maya@example.com", name: "Maya" } } as never, spy.response as never, (() => undefined) as never);
    expect(spy.read()).toEqual({
      statusCode: 201,
      body: { ok: true, status: "created", message: "You are on the Majlis waitlist." },
    });
  });

  it("returns a helpful duplicate confirmation", async () => {
    const handler = createMajlisWaitlistHandler(async () => "exists");
    const spy = responseSpy();
    await handler({ body: { email: "maya@example.com" } } as never, spy.response as never, (() => undefined) as never);
    expect(spy.read()).toEqual({
      statusCode: 200,
      body: { ok: true, status: "exists", message: "This email is already on the Majlis waitlist." },
    });
  });
});
