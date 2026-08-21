import { FormEvent, useState } from "react";
import { ArrowLeft, ArrowUpRight, Send } from "lucide-react";
import { Link } from "wouter";
import { SiteHeader } from "@/components/SiteHeader";
import "./legal.css";

type FormState = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");
  const [privacyConsent, setPrivacyConsent] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    setState("sending");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          company: form.get("company"),
          message: form.get("message"),
          sourcePage: "contact-page",
          privacyConsent,
        }),
      });
      const result = await response.json() as { ok: boolean; message: string };
      if (!response.ok || !result.ok) throw new Error(result.message);
      setState("success");
      setMessage(result.message);
      formElement.reset();
      setPrivacyConsent(false);
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "We could not save your message right now. Please try again shortly.");
    }
  }

  return (
    <div className="site-shell legal-page">
      <SiteHeader />
      <main className="legal-main contact-page">
        <div className="legal-rail" aria-hidden="true"><span>CONTACT</span><b>01</b></div>
        <section className="contact-intro" aria-labelledby="contact-title">
          <Link className="legal-back" href="/"><ArrowLeft size={16} /> Back to maybei</Link>
          <p className="legal-kicker">START A CONVERSATION</p>
          <h1 id="contact-title">A useful next move<br /><span>starts with a message.</span></h1>
          <p>Tell us what you are trying to build, improve or explore. The maybei team reads every message submitted through this form.</p>
        </section>

        <section className="contact-form-wrap" aria-labelledby="contact-form-title">
          <div className="contact-form-wrap__meta"><span>CONTACT THE TEAM</span><span>PRIVATE BY DEFAULT</span></div>
          <h2 id="contact-form-title">How can we help?</h2>
          <form className="contact-form" onSubmit={submit}>
            <label>Name<input name="name" autoComplete="name" minLength={2} maxLength={120} required /></label>
            <label>Email<input name="email" type="email" autoComplete="email" maxLength={320} required /></label>
            <label>Company <span className="contact-form__optional">optional</span><input name="company" autoComplete="organization" maxLength={160} /></label>
            <label className="contact-form__wide">What would you like to make better?<textarea name="message" minLength={10} maxLength={5000} required /></label>
            <label className="contact-form__consent contact-form__wide"><input type="checkbox" checked={privacyConsent} onChange={(event) => setPrivacyConsent(event.target.checked)} required /> <span>I have read the <Link href="/privacy-cookies">Privacy &amp; Cookies Notice</Link> and agree that maybei may use my message to respond.</span></label>
            <button className="button-primary contact-form__submit" type="submit" disabled={state === "sending"}>{state === "sending" ? "Sending…" : <>Send message <Send size={17} /></>}</button>
            {message && <p className={`contact-form__status contact-form__status--${state}`} role="status">{message}</p>}
          </form>
          <p className="contact-form-wrap__note">This form is not for sending passwords, payment information or other sensitive personal data.</p>
        </section>
      </main>
      <footer className="site-footer legal-footer"><img className="site-footer__brand" src="/manus-storage/maybei-logo-lockup-no-tagline-approved-cropped_d2852528.webp" alt="maybei" /><p>© 2026 maybei. Make it better.</p><div><Link href="/privacy-cookies">Privacy &amp; Cookies</Link><Link href="/terms">Terms</Link></div></footer>
    </div>
  );
}
