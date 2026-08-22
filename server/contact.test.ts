import { describe, expect, it } from "vitest";
import { contactMessageInput, createContactMessageHandler } from "./contact";

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

describe("Contact messages", () => {
  it("normalizes a minimal consented message", () => {
    expect(contactMessageInput.parse({
      name: " Alex Morgan ",
      email: " ALEX@example.com ",
      company: "  Field FC ",
      message: "  I would like to discuss a partnership. ",
      privacyConsent: true,
    })).toEqual({
      name: "Alex Morgan",
      email: "ALEX@example.com",
      company: "Field FC",
      message: "I would like to discuss a partnership.",
      sourcePage: "contact",
      privacyConsent: true,
    });
  });

  it("rejects a message without explicit privacy acknowledgement", () => {
    expect(contactMessageInput.safeParse({
      name: "Alex Morgan",
      email: "alex@example.com",
      message: "I would like to discuss a partnership.",
      privacyConsent: false,
    }).success).toBe(false);
  });

  it("returns a confirmation after persistence", async () => {
    const handler = createContactMessageHandler(async () => "created");
    const spy = responseSpy();
    await handler({ body: {
      name: "Alex Morgan",
      email: "alex@example.com",
      message: "I would like to discuss a partnership.",
      privacyConsent: true,
    } } as never, spy.response as never, (() => undefined) as never);

    expect(spy.read()).toEqual({
      statusCode: 201,
      body: { ok: true, status: "created", message: "Thank you — your message has been received." },
    });
  });

  it("returns a neutral error if persistence fails", async () => {
    const handler = createContactMessageHandler(async () => { throw new Error("database unavailable"); });
    const spy = responseSpy();
    await handler({ body: {
      name: "Alex Morgan",
      email: "alex@example.com",
      message: "I would like to discuss a partnership.",
      privacyConsent: true,
    } } as never, spy.response as never, (() => undefined) as never);

    expect(spy.read()).toEqual({
      statusCode: 500,
      body: { ok: false, message: "We could not save your message right now. Please try again shortly." },
    });
  });
});
