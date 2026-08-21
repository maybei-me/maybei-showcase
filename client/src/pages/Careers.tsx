/**
 * Midnight Signal Matrix: careers is a high-ownership invitation built around
 * real product-making, direct responsibility, and a calm editorial rhythm.
 */
import { FormEvent, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight, Check, ChevronRight, MoveUpRight } from "lucide-react";
import { Link } from "wouter";
import { SiteHeader } from "@/components/SiteHeader";
import { LogoMark } from "@/components/LogoMark";
import "./careers.css";

const disciplines = [
  ["Engineering", "AI / ML Engineers", "Full-stack Developers", "Backend Engineers", "Embedded / IoT Engineers"],
  ["Product", "Product Managers", "Product Owners", "Founders-in-residence"],
  ["Design", "Product Designers", "UX/UI Designers", "Brand / Visual Designers"],
  ["Data", "Data Engineers", "Data Scientists", "AI Researchers"],
  ["Growth", "Growth", "Marketing", "Community", "Business Development"],
  ["Quality", "QA Engineers", "Automation Engineers", "Product Quality"],
];

const roles = [
  ["AI / ML Engineer", "Remote / Flexible", "Full-time"],
  ["Full-stack Engineer", "Remote / Flexible", "Full-time"],
  ["Product Designer", "Remote", "Full-time"],
  ["Product Manager — Talio", "Remote / Flexible", "Full-time"],
];

const values = [
  ["Curiosity", "Ask why before asking how."],
  ["Ownership", "If you see a problem, you can own it."],
  ["Craft", "Good enough is rarely good enough."],
  ["Courage", "Challenge ideas — including ours."],
  ["Humanity", "Build technology that makes people’s lives better."],
];

export default function Careers() {
  const applicationFormRef = useRef<HTMLDivElement>(null);
  const [selectedRole, setSelectedRole] = useState("");
  const [applicationState, setApplicationState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [applicationMessage, setApplicationMessage] = useState("");

  const startApplication = (role: string) => {
    setSelectedRole(role);
    setApplicationState("idle");
    setApplicationMessage("");
    window.setTimeout(() => applicationFormRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 0);
  };

  const submitApplication = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    setApplicationState("sending");
    setApplicationMessage("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("fullName"),
          email: form.get("email"),
          company: "",
          message: `Candidate application for ${form.get("role")}. Portfolio: ${form.get("portfolio") || "not supplied"}. Message: ${form.get("message")}`,
          sourcePage: "careers-application",
          privacyConsent: form.get("privacyConsent") === "on",
        }),
      });
      const result = await response.json() as { ok: boolean; message: string };
      if (!response.ok || !result.ok) throw new Error(result.message);
      setApplicationState("success");
      setApplicationMessage("Thank you — your application has been received.");
      formElement.reset();
      setSelectedRole("");
    } catch (error) {
      setApplicationState("error");
      setApplicationMessage(error instanceof Error ? error.message : "We could not save your application right now. Please try again shortly.");
    }
  };

  return (
    <div className="site-shell careers-shell">
      <SiteHeader />
      <main>
        <section className="careers-hero" aria-labelledby="careers-hero-title">
          <div className="careers-hero__grid" aria-hidden="true" />
          <div className="careers-hero__content">
            <span className="section-index">Careers at maybei</span>
            <h1 id="careers-hero-title">Build things<br />that <span>matter.</span></h1>
            <div className="careers-hero__tail">
              <p>We build AI products that make everyday systems work better. Different problems. Different industries. One belief.</p>
              <strong>Technology should serve people.</strong>
            </div>
            <a href="#roles" className="button-primary">See open roles <ArrowDown size={17} /></a>
          </div>
          <div className="careers-hero__monogram" aria-hidden="true"><LogoMark /></div>
          <span className="careers-hero__corner">MAYBEI / BUILD 2026</span>
        </section>

        <section className="career-section careers-why">
          <div className="career-rail"><span>01 / WHY MAYBEI</span><b>THE WORK</b></div>
          <div className="careers-why__heading">
            <h2>You won’t just<br />build <span>features.</span></h2>
            <p>You’ll help decide what should exist in the first place.</p>
          </div>
          <div className="careers-why__body">
            <p>At maybei, we start with a real problem — then work backwards to technology.</p>
            <p>That gives you room to question, build, experiment and own the outcome rather than just your task.</p>
          </div>
          <div className="careers-why__pillars">
            {[["Question", "why something works the way it does."], ["Build", "from idea to working product."], ["Experiment", "with AI, data and new approaches."], ["Own", "the outcome, not just your task."]].map(([title, copy], index) => (
              <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>
            ))}
          </div>
        </section>

        <section className="career-section career-worlds">
          <div className="career-rail"><span>02 / PRODUCT WORLDS</span><b>ONE TEAM</b></div>
          <header>
            <h2>One team.<br /><span>Multiple worlds.</span></h2>
            <p>Move between real human problems, while carrying the same standard of clarity, usefulness and trust.</p>
          </header>
          <div className="career-worlds__list">
            {[
              ["TALIO", "AI Hiring", "Making professional opportunities more direct, transparent and human."],
              ["MAJLIS", "AI Relationships", "Helping people discover the right collaborators, partners and opportunities."],
              ["STRAWPOD AI", "AI Agriculture", "Using AI, sensors and automation to make growing smarter and more accessible."],
              ["SMART BOOTS", "AI Sports", "Turning movement into insight that helps athletes train and perform better."],
            ].map(([brand, type, copy], index) => (
              <article key={brand} className="career-world">
                <span className="career-world__number">0{index + 1}</span>
                <div><h3>{brand}</h3><span>{type}</span></div>
                <p>{copy}</p>
                <MoveUpRight size={19} />
              </article>
            ))}
          </div>
        </section>

        <section className="career-section careers-disciplines">
          <div className="career-rail"><span>03 / WHO WE’RE LOOKING FOR</span><b>YOUR PLACE</b></div>
          <h2>We care more about<br /><span>how you think</span> than your title.</h2>
          <div className="careers-disciplines__grid">
            {disciplines.map(([name, ...items]) => (
              <article key={name}>
                <h3>{name}</h3>
                <div>{items.map((item) => <p key={item}>{item}</p>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="careers-values">
          <div className="careers-values__intro">
            <span className="section-index">What we value</span>
            <h2>Principles that<br /><span>shape the work.</span></h2>
          </div>
          <div className="careers-values__list">
            {values.map(([title, copy], index) => (
              <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div><Check size={19} /></article>
            ))}
          </div>
        </section>

        <section className="career-section career-process">
          <div className="career-rail"><span>04 / HOW WE WORK</span><b>THE LOOP</b></div>
          <h2>Build. Test.<br /><span>Learn. Repeat.</span></h2>
          <div className="career-process__steps">
            {["Start with the problem.", "Build the smallest useful thing.", "Put it in people’s hands.", "Listen.", "Make it better."].map((step, index) => (
              <div key={step}><b>0{index + 1}</b><span>{step}</span></div>
            ))}
          </div>
        </section>

        <section id="roles" className="career-section career-roles">
          <div className="career-rail"><span>05 / OPEN POSITIONS</span><b>JOIN US</b></div>
          <div className="career-roles__header"><h2>Find your<br /><span>place.</span></h2><p>Roles can be remote or flexible. We care most about the work you want to make better.</p></div>
          <div className="career-roles__list">
            {roles.map(([title, location, type]) => (
              <button key={title} type="button" onClick={() => startApplication(title)} className="career-role">
                <h3>{title}</h3><span>{location}</span><span>{type}</span><ChevronRight size={22} />
              </button>
            ))}
          </div>
          <div ref={applicationFormRef} id="apply" className="career-application" tabIndex={-1}>
            <div className="career-application__intro">
              <span className="section-index">Candidate application</span>
              <h3>Tell us where<br /><span>you can help.</span></h3>
              <p>Choose a role, share the essentials and tell us what you want to build. A hiring conversation should begin with context, not a cold email.</p>
            </div>
            {applicationState === "success" ? (
              <div className="career-application__success" role="status">
                <strong>{applicationMessage}</strong>
                <p>We will use these details only to assess and respond to your application. Please do not send passwords, payment details or other sensitive data.</p>
                <button type="button" className="career-application__reset" onClick={() => setApplicationState("idle")}>Submit another application <ArrowUpRight size={16} /></button>
              </div>
            ) : (
              <form className="career-application__form" onSubmit={submitApplication}>
                <label>Full name<input name="fullName" autoComplete="name" required placeholder="Your name" /></label>
                <label>Email address<input name="email" autoComplete="email" type="email" required placeholder="you@example.com" /></label>
                <label>Role<select name="role" value={selectedRole} onChange={(event) => setSelectedRole(event.target.value)} required><option value="" disabled>Select a role</option>{roles.map(([title]) => <option key={title} value={title}>{title}</option>)}<option value="Open application">Open application</option></select></label>
                <label>LinkedIn or portfolio <span>Optional</span><input name="portfolio" type="url" placeholder="https://" /></label>
                <label className="career-application__message">What would you like to make better?<textarea name="message" required rows={5} placeholder="A short note about your experience, craft and the work you want to do." /></label>
                <label className="career-application__message career-application__consent"><input name="privacyConsent" type="checkbox" required /> <span>I have read the <Link href="/privacy-cookies">Privacy &amp; Cookies Notice</Link> and agree that maybei may use my details to respond to this application.</span></label>
                <button className="button-primary career-application__submit" type="submit" disabled={applicationState === "sending"}>{applicationState === "sending" ? "Sending…" : <>Send application <ArrowUpRight size={17} /></>}</button>
                {applicationMessage && <p className="career-application__note" role="status">{applicationMessage}</p>}
                <p className="career-application__note">We only use these details to assess and respond to your application. Please do not send passwords, payment details or other sensitive data.</p>
              </form>
            )}
          </div>
        </section>

        <section className="careers-open">
          <span className="section-index">No perfect role?</span>
          <h2>Maybe there’s no job<br />with your name on it <span>yet.</span></h2>
          <p>If you’re exceptionally good at what you do and want to build products that matter, we’d still like to hear from you.</p>
          <button type="button" onClick={() => startApplication("Open application")} className="button-primary button-primary--large">Introduce yourself <ArrowUpRight size={17} /></button>
        </section>
      </main>
      <footer className="site-footer">
        <img className="site-footer__brand" src="/manus-storage/maybei-logo-lockup-no-tagline-approved-cropped_d2852528.webp" alt="maybei" />
        <p>© 2026 maybei. Make it better.</p>
        <div className="site-footer__links"><Link href="/contact">Contact us</Link><Link href="/privacy-cookies">Privacy</Link><Link href="/terms">Terms</Link></div>
      </footer>
    </div>
  );
}
