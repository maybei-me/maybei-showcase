import { type PointerEvent, useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, Check, Compass, GraduationCap, Lightbulb, Maximize2, Users, WandSparkles, X } from "lucide-react";
import { Link } from "wouter";
import { SiteHeader } from "@/components/SiteHeader";
import "./majlis.css";

const audiencePaths = [
  {
    icon: Compass,
    label: "Looking for a direction",
    title: "Find a project that gives your skills somewhere to go.",
    text: "Students, early-career builders and curious specialists can discover meaningful work, mentors and teams before they have a perfect job title.",
    action: "Explore projects",
  },
  {
    icon: Lightbulb,
    label: "Carrying an idea",
    title: "Turn a strong hunch into a real team.",
    text: "Bring a problem, a question or a rough idea. Majlis helps you validate it, find the missing skills and create a path to an MVP.",
    action: "Bring an idea",
  },
  {
    icon: Users,
    label: "Building with others",
    title: "Meet people for what you are trying to make.",
    text: "Match with collaborators through skills, values and working goals — not just a polished profile or a lucky introduction.",
    action: "Find your people",
  },
  {
    icon: GraduationCap,
    label: "Ready to grow",
    title: "Find a mentor, a challenge or your next step.",
    text: "A professional network can be useful before it is prestigious. Majlis makes room for learning, contribution and first chances.",
    action: "Start your profile",
  },
];

const networkSteps = [
  ["01", "Show up as you are", "A guided AI Scan maps your skills, interests, values and goals into a living profile."],
  ["02", "See what fits", "Smart Match surfaces people, projects, mentors and opportunities that make sense together."],
  ["03", "Make something real", "Chat, form a team, shape an idea and use AI Co-Founder to move from conversation to action."],
];

const expandableScreens = {
  ai: {
    src: "/manus-storage/majlis-02-ai_d39943d6.png",
    alt: "English Majlis AI screens showing interests selection, AI scan, results, assistant and daily brief",
    label: "AI screens",
  },
  network: {
    src: "/manus-storage/majlis-04-network_a8d1f989.png",
    alt: "English Majlis network screens showing match feed, match details, profile, chat and AI summary",
    label: "Network screens",
  },
  community: {
    src: "/manus-storage/majlis-07-community_9e7e7178.png",
    alt: "English Majlis community screens showing world map, communities and calendar",
    label: "Community screens",
  },
} as const;

type ExpandableScreen = keyof typeof expandableScreens;

export default function Majlis() {
  const [activeScreen, setActiveScreen] = useState<ExpandableScreen | null>(null);
  const activeScreenData = activeScreen ? expandableScreens[activeScreen] : null;
  const [coverOffset, setCoverOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!activeScreen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveScreen(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [activeScreen]);

  const handleCoverPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    setCoverOffset({
      x: ((event.clientX - bounds.left) / bounds.width - 0.5) * 12,
      y: ((event.clientY - bounds.top) / bounds.height - 0.5) * 12,
    });
  };

  return (
    <div className="majlis-page">
      <SiteHeader />
      <main>
        <section className="majlis-hero" aria-labelledby="majlis-hero-title">
          <div className="majlis-hero__content">
            <p className="majlis-kicker">MAJLIS · AI NETWORK FOR HUMAN POTENTIAL</p>
            <h1 id="majlis-hero-title">The right people can change the direction of a life.</h1>
            <p className="majlis-hero__lede">Majlis helps people find the projects, teammates, mentors and opportunities that make their potential useful.</p>
            <p className="majlis-hero__note">For students, builders, researchers, founders and everyone in between.</p>
            <div className="majlis-hero__actions">
              <a className="majlis-button" href="#paths">Find where you fit <ArrowRight size={17} /></a>
              <a className="majlis-text-link" href="#how-it-works">See how it works <ArrowUpRight size={16} /></a>
            </div>
          </div>
          <div className="majlis-hero__visual majlis-hero__visual--cover" onPointerMove={handleCoverPointerMove} onPointerLeave={() => setCoverOffset({ x: 0, y: 0 })}>
            <img style={{ transform: `translate3d(${coverOffset.x}px, ${coverOffset.y}px, 0)` }} src="/manus-storage/majlis-ai-head-cover_c78de273.png" alt="Majlis AI Network for Human Potential cover with a glowing connected human head" />
          </div>
        </section>

        <section className="majlis-statement" aria-label="Majlis point of view">
          <p className="majlis-statement__index">A DIFFERENT KIND OF NETWORK</p>
          <blockquote>“Most people do not need more noise. They need a clearer next step — and someone worth taking it with.”</blockquote>
          <p className="majlis-statement__caption">Majlis is built around the belief that potential becomes visible through meaningful connection.</p>
        </section>

        <section id="paths" className="majlis-section majlis-paths" aria-labelledby="paths-title">
          <div className="majlis-section__rail"><span>WHO IT IS FOR</span><b>01</b></div>
          <div className="majlis-section__body">
            <div className="majlis-split">
              <div><p className="majlis-eyebrow">There is no single way in.</p><h2 id="paths-title">Start with what you are trying to do.</h2></div>
              <p>Some people arrive with a company. Some arrive with a skill, a research question or the feeling that they are ready for a bigger challenge. Majlis gives each of them a useful first move.</p>
            </div>
            <div className="majlis-audience-grid">
              {audiencePaths.map(({ icon: Icon, label, title, text, action }) => (
                <article className="majlis-audience-card" key={label}>
                  <div className="majlis-audience-card__top"><Icon size={20} strokeWidth={1.5} /><span>{label}</span></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <a href="#how-it-works">{action} <ArrowUpRight size={15} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="majlis-section majlis-how" aria-labelledby="how-title">
          <div className="majlis-section__rail"><span>HOW IT WORKS</span><b>02</b></div>
          <div className="majlis-section__body">
            <div className="majlis-split">
              <div><p className="majlis-eyebrow">From a profile to a possibility.</p><h2 id="how-title">A network that gets more useful over time.</h2></div>
              <p>Majlis uses AI to understand the person behind the profile, then turns every thoughtful interaction into a better recommendation — without reducing people to a score.</p>
            </div>
            <div className="majlis-steps">
              {networkSteps.map(([number, title, text]) => (
                <div className="majlis-step" key={number}>
                  <span>{number}</span><div><h3>{title}</h3><p>{text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="majlis-evidence" aria-labelledby="evidence-title">
          <div className="majlis-evidence__header">
            <div><p className="majlis-eyebrow">Product, not a promise.</p><h2 id="evidence-title">The first version is already taking shape.</h2></div>
            <p>Explore the English product screens: discover communities, find projects, build a profile and start something new.</p>
          </div>
          <div className="majlis-evidence__feature">
            <button className="majlis-evidence__media-button" type="button" onClick={() => setActiveScreen("ai")} aria-label="Expand AI screens">
              <img src={expandableScreens.ai.src} alt={expandableScreens.ai.alt} />
              <span><Maximize2 size={17} /> Expand AI screens</span>
            </button>
            <div className="majlis-evidence__feature-copy"><span>AI THAT LISTENS FIRST</span><h3>Start with who you are, not who you know.</h3><p>AI Scan turns skills, interests and intentions into a useful starting point for the next connection.</p></div>
          </div>
          <div className="majlis-evidence__grid">
            <figure><button className="majlis-evidence__media-button" type="button" onClick={() => setActiveScreen("network")} aria-label="Expand Network screens"><img src={expandableScreens.network.src} alt={expandableScreens.network.alt} /><span><Maximize2 size={17} /> Expand Network screens</span></button><figcaption>People, context and possibility in one readable view</figcaption></figure>
            <figure><button className="majlis-evidence__media-button" type="button" onClick={() => setActiveScreen("community")} aria-label="Expand Community screens"><img src={expandableScreens.community.src} alt={expandableScreens.community.alt} /><span><Maximize2 size={17} /> Expand Community screens</span></button><figcaption>Find the rooms where ideas grow</figcaption></figure>
          </div>
        </section>

        <section className="majlis-trust-section" aria-labelledby="trust-title">
          <div className="majlis-trust-section__copy"><p className="majlis-eyebrow">Trust is a product decision.</p><h2 id="trust-title">Human potential needs room to grow safely.</h2><p>Majlis is designed around professional goals, skills, projects and consent. It is not built to turn private life into a feed or make people perform a version of themselves.</p><div className="majlis-trust-list"><span><Check size={16} /> Clear profile controls</span><span><Check size={16} /> Professional context</span><span><Check size={16} /> Human-led connections</span></div></div>
          <div className="majlis-trust-section__visual"><img src="/manus-storage/majlis-dashboard_0059cfcb.png" alt="English Majlis profile dashboard showing trust level, active project and privacy controls" /><div><WandSparkles size={18} /><span>AI should make the next step clearer — not make the person smaller.</span></div></div>
        </section>

        <section className="majlis-closing" aria-labelledby="closing-title">
          <p className="majlis-kicker">THE NEXT CHAPTER IS A MATCH AWAY</p>
          <h2 id="closing-title">You do not need to have it all figured out.</h2>
          <p>Bring a skill, a question, an idea or a goal. Majlis helps you find the people and projects that can take it further.</p>
          <a className="majlis-button" href="#paths">Start with your potential <ArrowRight size={17} /></a>
        </section>
      </main>
      <footer className="site-footer majlis-footer"><img className="site-footer__brand" src="/manus-storage/maybei-logo-lockup-no-tagline-approved-cropped_d2852528.webp" alt="maybei" /><p>© 2026 maybei. Majlis — an AI network for human potential.</p><div className="site-footer__links"><Link href="/contact">Contact us</Link><Link href="/privacy-cookies">Privacy</Link><Link href="/terms">Terms</Link></div></footer>
      {activeScreenData && (
        <div className="majlis-lightbox" role="dialog" aria-modal="true" aria-label={`${activeScreenData.label} expanded preview`}>
          <button className="majlis-lightbox__backdrop" type="button" aria-label="Close expanded preview" onClick={() => setActiveScreen(null)} />
          <div className="majlis-lightbox__content">
            <button className="majlis-lightbox__close" type="button" aria-label="Close expanded preview" onClick={() => setActiveScreen(null)}><X size={20} /></button>
            <img src={activeScreenData.src} alt={activeScreenData.alt} />
          </div>
        </div>
      )}
    </div>
  );
}
