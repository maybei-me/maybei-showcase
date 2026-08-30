import { FormEvent, useRef, useState } from "react";
import { ArrowUpRight, Check, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { BrandLockup } from "@/components/LogoMark";
import { SiteHeader } from "@/components/SiteHeader";
import "./careers.css";

type Role = {
  id: string;
  title: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
};

const roles: Role[] = [
  {
    id: "ai-ml-engineer",
    title: "AI / ML Engineer",
    location: "Remote / Flexible",
    type: "Full-time",
    summary:
      "Build practical AI systems that make complex product decisions clearer, faster and more useful for people.",
    responsibilities: [
      "Prototype and ship matching, ranking and assistant workflows.",
      "Create evaluations that make model quality and failure modes visible.",
      "Work with product and engineering from early discovery through production.",
    ],
    requirements: [
      "Strong Python skills and experience taking ML or LLM features into production.",
      "A practical approach to data quality, observability and responsible AI.",
      "Clear communication and the judgement to choose a simple solution when it is enough.",
    ],
  },
  {
    id: "full-stack-engineer",
    title: "Full-stack Engineer",
    location: "Remote / Flexible",
    type: "Full-time",
    summary:
      "Own complete product journeys across the interface, APIs and data layer, with a strong bias toward useful releases.",
    responsibilities: [
      "Build responsive React experiences and reliable backend services.",
      "Turn product decisions into small, testable releases.",
      "Improve performance, accessibility and operational clarity as the product grows.",
    ],
    requirements: [
      "Strong TypeScript and modern React experience, plus confidence working with APIs and databases.",
      "A testing mindset and care for maintainable production code.",
      "Comfort with ambiguity, direct feedback and end-to-end ownership.",
    ],
  },
  {
    id: "product-designer",
    title: "Product Designer",
    location: "Remote",
    type: "Full-time",
    summary:
      "Design calm, understandable tools for decisions that are often stressful, fragmented or unclear.",
    responsibilities: [
      "Map end-to-end journeys and simplify the moments with the most friction.",
      "Move from research and rough flows to polished, accessible interfaces.",
      "Build and evolve reusable interaction patterns with engineers.",
    ],
    requirements: [
      "A portfolio showing shipped digital products and clear product reasoning.",
      "Strong interaction, visual and prototyping craft across desktop and mobile.",
      "Curiosity about real user behaviour and willingness to test assumptions early.",
    ],
  },
  {
    id: "product-manager-talio",
    title: "Product Manager — Talio",
    location: "Remote / Flexible",
    type: "Full-time",
    summary:
      "Shape a more transparent hiring workflow for candidates and employers, from discovery to measurable product outcomes.",
    responsibilities: [
      "Lead discovery with candidates, recruiters and hiring teams.",
      "Turn evidence into priorities, clear briefs and measurable releases.",
      "Keep design, engineering and go-to-market work aligned around the user problem.",
    ],
    requirements: [
      "Experience owning a digital product from discovery through delivery.",
      "Strong written thinking, prioritisation and stakeholder communication.",
      "Respect for candidate privacy, transparent AI and the human impact of hiring decisions.",
    ],
  },
];

const principles = [
  [
    "Start with the problem",
    "Understand the person and the friction before choosing the technology.",
  ],
  [
    "Own the outcome",
    "Work across boundaries and stay responsible for what reaches people.",
  ],
  [
    "Show the evidence",
    "Test assumptions, make trade-offs visible and learn from real use.",
  ],
  [
    "Build with care",
    "Quality, accessibility and responsible AI are part of the work from day one.",
  ],
];

type ApplicationState = "idle" | "sending" | "success" | "error";

export default function Careers() {
  const applicationFormRef = useRef<HTMLElement>(null);
  const [expandedRole, setExpandedRole] = useState<string | null>(null);
  const [selectedRole, setSelectedRole] = useState("");
  const [applicationState, setApplicationState] =
    useState<ApplicationState>("idle");
  const [applicationMessage, setApplicationMessage] = useState("");

  const startApplication = (role: string) => {
    setSelectedRole(role);
    setApplicationState("idle");
    setApplicationMessage("");
    window.setTimeout(() => {
      applicationFormRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      applicationFormRef.current?.focus({ preventScroll: true });
    }, 0);
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
      const result = (await response.json()) as {
        ok: boolean;
        message: string;
      };
      if (!response.ok || !result.ok) throw new Error(result.message);

      setApplicationState("success");
      setApplicationMessage("Thank you — your application has been received.");
      formElement.reset();
      setSelectedRole("");
    } catch (error) {
      setApplicationState("error");
      setApplicationMessage(
        error instanceof Error
          ? error.message
          : "We could not save your application right now. Please try again shortly."
      );
    }
  };

  return (
    <div className="site-shell careers-shell">
      <SiteHeader />
      <main>
        <section className="careers-hero" aria-labelledby="careers-hero-title">
          <div className="careers-hero__grid" aria-hidden="true" />
          <div className="careers-hero__layout">
            <div className="careers-hero__intro">
              <span className="section-index">Careers at maybei</span>
              <h1 id="careers-hero-title">
                Open roles.
                <br />
                <span>Real ownership.</span>
              </h1>
              <p>
                Join a small product team building AI tools around real human
                problems. You will help decide what matters, ship the work and
                learn from what happens next.
              </p>
              <div className="careers-hero__signals" aria-label="Role overview">
                <span>
                  <b>{String(roles.length).padStart(2, "0")}</b> open roles
                </span>
                <span>Remote-first</span>
                <span>Full-time</span>
              </div>
            </div>

            <div className="career-openings" aria-labelledby="open-roles-title">
              <div className="career-openings__header">
                <h2 id="open-roles-title">Open positions</h2>
                <span>Choose a role to see the details</span>
              </div>
              <div className="career-openings__list">
                {roles.map((role, index) => {
                  const isExpanded = expandedRole === role.id;
                  return (
                    <article
                      className="career-role"
                      data-expanded={isExpanded}
                      key={role.id}
                    >
                      <button
                        type="button"
                        className="career-role__trigger"
                        aria-expanded={isExpanded}
                        aria-controls={`${role.id}-details`}
                        onClick={() =>
                          setExpandedRole(isExpanded ? null : role.id)
                        }
                      >
                        <span className="career-role__number">
                          0{index + 1}
                        </span>
                        <span className="career-role__title">
                          <strong>{role.title}</strong>
                          <small>
                            {role.location} · {role.type}
                          </small>
                        </span>
                        <ChevronDown size={20} />
                      </button>
                      {isExpanded && (
                        <div
                          className="career-role__details"
                          id={`${role.id}-details`}
                        >
                          <p className="career-role__summary">{role.summary}</p>
                          <div className="career-role__columns">
                            <div>
                              <h3>What you’ll do</h3>
                              <ul>
                                {role.responsibilities.map(item => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h3>What we’re looking for</h3>
                              <ul>
                                {role.requirements.map(item => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <button
                            type="button"
                            className="career-role__apply"
                            onClick={() => startApplication(role.title)}
                          >
                            Apply for this role <ArrowUpRight size={16} />
                          </button>
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section
          className="career-culture"
          aria-labelledby="career-culture-title"
        >
          <div className="career-rail">
            <span>HOW WE WORK</span>
            <b>01</b>
          </div>
          <div className="career-culture__intro">
            <h2 id="career-culture-title">
              Small team.
              <br />
              <span>Clear standards.</span>
            </h2>
            <p>
              Titles matter less than judgement, curiosity and the ability to
              turn an unclear problem into useful work.
            </p>
          </div>
          <div className="career-culture__principles">
            {principles.map(([title, copy], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
                <Check size={18} />
              </article>
            ))}
          </div>
        </section>

        <section
          ref={applicationFormRef}
          id="apply"
          className="career-application"
          tabIndex={-1}
          aria-labelledby="application-title"
        >
          <div className="career-application__intro">
            <span className="section-index">Candidate application</span>
            <h2 id="application-title">
              Start with
              <br />
              <span>the essentials.</span>
            </h2>
            <p>
              Select a role and share enough context for a useful first
              conversation. A portfolio or LinkedIn profile is welcome, but the
              short note matters most.
            </p>
            <button
              type="button"
              className="career-application__open"
              onClick={() => setSelectedRole("Open application")}
            >
              No matching role? Send an open application{" "}
              <ArrowUpRight size={16} />
            </button>
          </div>
          {applicationState === "success" ? (
            <div className="career-application__success" role="status">
              <strong>{applicationMessage}</strong>
              <p>
                We will use these details only to assess and respond to your
                application. Please do not send passwords, payment details or
                other sensitive data.
              </p>
              <button
                type="button"
                className="career-application__reset"
                onClick={() => setApplicationState("idle")}
              >
                Submit another application <ArrowUpRight size={16} />
              </button>
            </div>
          ) : (
            <form
              className="career-application__form"
              onSubmit={submitApplication}
            >
              <label>
                Full name
                <input
                  name="fullName"
                  autoComplete="name"
                  minLength={2}
                  maxLength={120}
                  required
                  placeholder="Your name"
                />
              </label>
              <label>
                Email address
                <input
                  name="email"
                  autoComplete="email"
                  type="email"
                  maxLength={320}
                  required
                  placeholder="you@example.com"
                />
              </label>
              <label>
                Role
                <select
                  name="role"
                  value={selectedRole}
                  onChange={event => setSelectedRole(event.target.value)}
                  required
                >
                  <option value="" disabled>
                    Select a role
                  </option>
                  {roles.map(({ title }) => (
                    <option key={title} value={title}>
                      {title}
                    </option>
                  ))}
                  <option value="Open application">Open application</option>
                </select>
              </label>
              <label>
                LinkedIn or portfolio <span>Optional</span>
                <input name="portfolio" type="url" placeholder="https://" />
              </label>
              <label className="career-application__message">
                What would you like to make better?
                <textarea
                  name="message"
                  minLength={10}
                  maxLength={4000}
                  required
                  rows={5}
                  placeholder="A short note about your experience, craft and the work you want to do."
                />
              </label>
              <label className="career-application__message career-application__consent">
                <input name="privacyConsent" type="checkbox" required />{" "}
                <span>
                  I have read the{" "}
                  <Link href="/privacy-cookies">
                    Privacy &amp; Cookies Notice
                  </Link>{" "}
                  and agree that maybei may use my details to respond to this
                  application.
                </span>
              </label>
              <button
                className="button-primary career-application__submit"
                type="submit"
                disabled={applicationState === "sending"}
              >
                {applicationState === "sending" ? (
                  "Sending…"
                ) : (
                  <>
                    Send application <ArrowUpRight size={17} />
                  </>
                )}
              </button>
              {applicationMessage && (
                <p
                  className={`career-application__note career-application__note--${applicationState}`}
                  role={applicationState === "error" ? "alert" : "status"}
                >
                  {applicationMessage}
                </p>
              )}
              <p className="career-application__note">
                We only use these details to assess and respond to your
                application. Please do not send passwords, payment details or
                other sensitive data.
              </p>
            </form>
          )}
        </section>
      </main>
      <footer className="site-footer">
        <BrandLockup className="site-footer__brand" />
        <p>© 2026 maybei. Make it better.</p>
        <div className="site-footer__links">
          <Link href="/contact">Contact us</Link>
          <Link href="/privacy-cookies">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </footer>
    </div>
  );
}
