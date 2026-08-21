/**
 * Talio product page: cream-led product storytelling with real UI evidence,
 * candidate/employer parity, and a clear invitation for early company partners.
 */
import { useState, type FormEvent } from "react";
import { ArrowLeft, ArrowUpRight, Check, Clock3, MessageCircle, Search, Users } from "lucide-react";
import { Link } from "wouter";
import { SiteHeader } from "@/components/SiteHeader";
import "./talio.css";

const flow = [
  ["01", "One Profile", "Create once. Apply anywhere on Talio."],
  ["02", "AI Match", "Match on skills, experience and culture fit — not keywords alone."],
  ["03", "Chat", "Keep the candidate–employer conversation in one place."],
  ["04", "Interview", "Schedule, remind and meet without switching tools."],
  ["05", "Offer", "Move from signal to a better hiring decision."],
];

type FeatureIcon = typeof Clock3;

const candidateFeatures: Array<[string, string, FeatureIcon]> = [
  ["Response Timer", "Mandatory reply windows at every stage. No more silence for weeks.", Clock3],
  ["Application Timeline", "See exactly where your application stands, at any moment.", Search],
  ["One Profile", "One profile for every Talio application — no repetitive forms.", Users],
];

const employerFeatures: Array<[string, string, FeatureIcon]> = [
  ["AI Match", "Bring the candidates who actually fit to the top of the pipeline.", Search],
  ["Unified workflow", "Discover → Match → Chat → Interview → Hire in one place.", MessageCircle],
  ["Pipeline visibility", "See every candidate and every job in real time.", Check],
];

export default function Talio() {
  const [submissionState, setSubmissionState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [submissionMessage, setSubmissionMessage] = useState("");

  const handlePilotSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    setSubmissionState("sending");
    setSubmissionMessage("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          company: form.get("company"),
          message: `Talio pilot enquiry. Hiring focus: ${form.get("need")}`,
          sourcePage: "talio-company-pilot",
          privacyConsent: form.get("privacyConsent") === "on",
        }),
      });
      const result = await response.json() as { ok: boolean; message: string };
      if (!response.ok || !result.ok) throw new Error(result.message);
      setSubmissionState("success");
      setSubmissionMessage(result.message);
      formElement.reset();
    } catch (error) {
      setSubmissionState("error");
      setSubmissionMessage(error instanceof Error ? error.message : "We could not save your message right now. Please try again shortly.");
    }
  };

  return (
    <div className="talio-page">
      <SiteHeader />
      <main>
        <section className="talio-hero">
          <div className="talio-hero__content">
            <Link className="talio-back" href="/#products"><ArrowLeft size={15} /> Back to maybei projects</Link>
            <img className="talio-logo" src="/manus-storage/talio-logo-dark_88714583.webp" alt="talio" />
            <span className="talio-kicker">Human hiring. Intelligent technology.</span>
            <h1>Skills in.<br /><em>Culture fit.</em><br />Hired.</h1>
            <p className="talio-hero__lead">Transparent hiring for everyone — candidates and employers, in one platform.</p>
            <div className="talio-hero__actions">
              <a className="talio-button talio-button--dark" href="https://talio.tech" target="_blank" rel="noreferrer">Join the Talio pilot <ArrowUpRight size={17} /></a>
              <a className="talio-text-link" href="#product">See how it works <ArrowUpRight size={16} /></a>
              <Link className="talio-text-link" href="/talio-v2">View presentation edition <ArrowUpRight size={16} /></Link>
            </div>
          </div>
          <div className="talio-hero__visual">
            <div className="talio-hero__orb" />
            <img className="talio-hero__people-visual" src="/manus-storage/talio-built-for-people_59ee58a8.png" alt="Talio visual featuring people and the message Built for people, powered by technology" />
          </div>
        </section>

        <section className="talio-trust" aria-label="Talio status">
          <span>LIVE PRODUCT</span><b>Jobs · Community · Chat · Response Timer · AI Match</b><span>FIRST COHORT</span>
        </section>

        <section id="product" className="talio-section talio-problem">
          <div className="talio-section__rail"><span>THE PROMISE</span><b>01</b></div>
          <div className="talio-split">
            <div><span className="talio-eyebrow">Hiring is broken for both sides.</span><h2>Every candidate deserves an answer.<br /><em>Every employer deserves a better match.</em></h2></div>
            <p>Most hiring platforms optimize for the employer alone. Talio is built around the full relationship: clearer signals, fewer handoffs and a process people can actually understand.</p>
          </div>
          <div className="talio-stat-grid">
            <div><strong>30–80</strong><span>applications a candidate may send before an offer</span></div>
            <div><strong>48–68</strong><span>days to hire for a technical role</span></div>
            <div><strong>6 → 1</strong><span>disconnected tools replaced by one workflow</span></div>
          </div>
        </section>

        <section className="talio-section talio-flow">
          <div className="talio-section__rail"><span>THE WORKFLOW</span><b>02</b></div>
          <div className="talio-split"><div><span className="talio-eyebrow">Hiring, finally in one place.</span><h2>From discovery<br /><em>to a better match.</em></h2></div><p>Talio connects the moments that usually live across an ATS, email, calendar, video calls and spreadsheets.</p></div>
          <div className="talio-flow__list">{flow.map(([number, title, copy]) => <div className="talio-flow__item" key={number}><b>{number}</b><h3>{title}</h3><p>{copy}</p><ArrowUpRight size={19} /></div>)}</div>
        </section>

        <section className="talio-evidence">
          <div className="talio-evidence__header"><span className="talio-eyebrow">Real product evidence</span><h2>Designed around<br /><em>the conversation.</em></h2><p>Jobs, community and chat are already taking shape in the product. The interface keeps the human exchange visible while AI handles the noise.</p></div>
          <div className="talio-evidence__images"><img src="/manus-storage/talio-jobs-community_e59e2f40.png" alt="Talio jobs and community interfaces" /><img src="/manus-storage/talio-chat_83f67527.png" alt="Talio chat interface with job details" /></div>
        </section>

        <section className="talio-section talio-features">
          <div className="talio-section__rail"><span>FOR BOTH SIDES</span><b>03</b></div>
          <div className="talio-feature-columns">
            <div><span className="talio-eyebrow">For candidates</span><h2>Less uncertainty.<br /><em>More agency.</em></h2>{candidateFeatures.map(([title, copy, Icon]) => <article key={title}><Icon size={20} /><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
            <div><span className="talio-eyebrow">For employers</span><h2>Less noise.<br /><em>Better signal.</em></h2>{employerFeatures.map(([title, copy, Icon]) => <article key={title}><Icon size={20} /><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
          </div>
        </section>

        <section className="talio-partner-cta">
          <img src="/manus-storage/talio-logo-light_2b15328e.webp" alt="talio" />
          <span className="talio-eyebrow">For companies ready to hire differently</span>
          <h2>Be part of the<br /><em>first cohort.</em></h2>
          <p>Talio is onboarding its first candidates and employers now. We are looking for companies willing to shape a more transparent hiring process with us.</p>
          <form id="company-pilot-form" className="talio-pilot-form" onSubmit={handlePilotSubmit}>
            <label><span>Your name</span><input name="name" autoComplete="name" required placeholder="Your name" /></label>
            <label><span>Company email</span><input name="email" autoComplete="email" type="email" required placeholder="you@company.com" /></label>
            <label><span>Company</span><input name="company" autoComplete="organization" placeholder="Your company" /></label>
            <label><span>What are you hiring for?</span><input name="need" required placeholder="e.g. engineering, sales, product" /></label>
            <label className="talio-pilot-form__consent"><input name="privacyConsent" type="checkbox" required /> <span>I have read the <Link href="/privacy-cookies">Privacy &amp; Cookies Notice</Link> and agree that maybei may use these details to respond.</span></label>
            <button className="talio-button talio-button--lime" type="submit" disabled={submissionState === "sending"}>{submissionState === "sending" ? "Sending…" : <>Request a pilot conversation <ArrowUpRight size={17} /></>}</button>
            {submissionMessage && <p className={`talio-form-success talio-form-success--${submissionState}`} role="status">{submissionMessage}</p>}
            <small>We only use these details to respond to your pilot enquiry. Please do not send passwords, payment details or other sensitive data.</small>
          </form>
        </section>
      </main>
      <footer className="site-footer talio-footer"><img className="site-footer__brand" src="/manus-storage/maybei-logo-lockup-no-tagline-approved-cropped_d2852528.webp" alt="maybei" /><p>© 2026 maybei. Talio — transparent hiring for everyone.</p><div className="site-footer__links"><Link href="/contact">Contact us</Link><Link href="/privacy-cookies">Privacy</Link><Link href="/terms">Terms</Link></div></footer>
    </div>
  );
}
