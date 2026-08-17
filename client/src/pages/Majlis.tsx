import { ArrowRight, ArrowUpRight, Check, Compass, GraduationCap, Lightbulb, Users, WandSparkles } from "lucide-react";
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

export default function Majlis() {
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
          <div className="majlis-hero__visual">
            <div className="majlis-hero__visual-label"><span>PRODUCT EVIDENCE</span><span>01 / 05</span></div>
            <img src="/manus-storage/majlis-english-auth_a25f09f0.png" alt="English Majlis onboarding screens showing the AI network for human potential" />
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
            <img src="/manus-storage/majlis-english-product-board_e29ec27e.png" alt="English Majlis community screens showing world map, events, communities and calendar" />
            <div className="majlis-evidence__feature-copy"><span>THE NETWORK IN MOTION</span><h3>Not a feed to scroll. A map of what could happen next.</h3><p>Projects, communities and events create more ways to meet people with shared intent.</p></div>
          </div>
          <div className="majlis-evidence__grid">
            <figure><img src="/manus-storage/majlis-english-product-board_e29ec27e.png" alt="English Majlis dashboard with AI recommendations" /><figcaption>AI-personalized dashboard</figcaption></figure>
            <figure><img src="/manus-storage/majlis-english-profile_e11dc060.png" alt="English Majlis profile with trust level and active project" /><figcaption>A profile that shows how you work</figcaption></figure>
            <figure><img src="/manus-storage/majlis-english-product-board_e29ec27e.png" alt="English Majlis project matching screen" /><figcaption>Projects matched to your potential</figcaption></figure>
          </div>
        </section>

        <section className="majlis-trust-section" aria-labelledby="trust-title">
          <div className="majlis-trust-section__copy"><p className="majlis-eyebrow">Trust is a product decision.</p><h2 id="trust-title">Human potential needs room to grow safely.</h2><p>Majlis is designed around professional goals, skills, projects and consent. It is not built to turn private life into a feed or make people perform a version of themselves.</p><div className="majlis-trust-list"><span><Check size={16} /> Clear profile controls</span><span><Check size={16} /> Professional context</span><span><Check size={16} /> Human-led connections</span></div></div>
          <div className="majlis-trust-section__visual"><img src="/manus-storage/majlis-english-profile_e11dc060.png" alt="English Majlis profile privacy and membership controls" /><div><WandSparkles size={18} /><span>AI should make the next step clearer — not make the person smaller.</span></div></div>
        </section>

        <section className="majlis-closing" aria-labelledby="closing-title">
          <p className="majlis-kicker">THE NEXT CHAPTER IS A MATCH AWAY</p>
          <h2 id="closing-title">You do not need to have it all figured out.</h2>
          <p>Bring a skill, a question, an idea or a goal. Majlis helps you find the people and projects that can take it further.</p>
          <a className="majlis-button" href="#paths">Start with your potential <ArrowRight size={17} /></a>
        </section>
      </main>
      <footer className="site-footer majlis-footer"><img className="site-footer__brand" src="/manus-storage/maybei-logo-lockup-no-tagline-approved-cropped_d2852528.webp" alt="maybei" /><p>© 2026 maybei. Majlis — an AI network for human potential.</p><Link href="/">Back to maybei</Link></footer>
    </div>
  );
}
