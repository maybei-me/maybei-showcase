import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { SiteHeader } from "@/components/SiteHeader";
import "./majlis.css";

export default function Majlis() {
  return (
    <div className="majlis-page">
      <SiteHeader />
      <main>
        <section className="majlis-hero">
          <div className="majlis-hero__content">
            <span className="majlis-eyebrow">AI Network for Human Potential</span>
            <h1>One intelligent graph of people, projects, and capital.</h1>
            <p>MAJLIS is the AI-native platform where founders find co-founders, build startups, and raise money. It scans skills, values, and goals to continuously match the right people at software speed.</p>
            <a className="majlis-button" href="#product">Explore the network <ArrowUpRight size={17} /></a>
          </div>
          <div className="majlis-hero__visual">
            <img src="/manus-storage/majlis-onboarding_d57e39ac.png" alt="Majlis AI network onboarding and profile creation" />
          </div>
        </section>
        <section className="majlis-trust" aria-label="Majlis status">
          <span>SYSTEM DESIGN</span><b>Smart Match · AI Co-Founder · Deal Room · Trust Score</b><span>GLOBAL NETWORK</span>
        </section>
        <section id="product" className="majlis-section majlis-problem">
          <div className="majlis-section__rail"><span>THE PROBLEM</span><b>01</b></div>
          <div className="majlis-split">
            <div><span className="majlis-eyebrow">Building a startup is fragmented.</span><h2>Stitching together<br /><em>six different tools.</em></h2></div>
            <p>Finding a co-founder is a coin flip on resume boards. Fundraising is a black box of warm intros and scattered pitch decks. And nobody vets trust at scale — reputation lives in gossip, not in data.</p>
          </div>
        </section>
        <section className="majlis-section majlis-flow">
          <div className="majlis-section__rail"><span>HOW IT WORKS</span><b>02</b></div>
          <div className="majlis-split"><div><span className="majlis-eyebrow">From AI Scan to funded company.</span><h2>One connected<br /><em>workflow.</em></h2></div><p>Every step feeds the next: scan data sharpens matches, matches seed projects, and projects generate the trust signal that closes deals.</p></div>
          <div className="majlis-flow__list">
            <div className="majlis-flow__item"><b>01</b><h3>AI Scan</h3><p>New members complete a guided scan of skills, values, and goals. MAJLIS builds a vector AI Profile in minutes.</p><ArrowUpRight size={19} /></div>
            <div className="majlis-flow__item"><b>02</b><h3>Smart Match</h3><p>The engine surfaces co-founders, teammates, projects, and investors ranked by compatibility — refreshed daily.</p><ArrowUpRight size={19} /></div>
            <div className="majlis-flow__item"><b>03</b><h3>AI Co-Founder</h3><p>Turn a match into a company: idea validation, business model, roadmap, and team plan, generated with AI.</p><ArrowUpRight size={19} /></div>
            <div className="majlis-flow__item"><b>04</b><h3>Deal Room</h3><p>Package the pitch deck, financials, and cap table, then invite investors into a secure, trackable room.</p><ArrowUpRight size={19} /></div>
          </div>
        </section>
        <section className="majlis-evidence">
          <div className="majlis-evidence__header"><span className="majlis-eyebrow">Built, not mocked</span><h2>The current<br /><em>product.</em></h2><p>An AI-personalized dashboard, 92% co-founder match accuracy, living AI profiles, and a secure investor deal room.</p></div>
          <div className="majlis-evidence__images">
            <img src="/manus-storage/majlis-dashboard_612d7f0b.png" alt="Majlis AI-personalized Dashboard" />
            <img src="/manus-storage/majlis-match_d6fca207.png" alt="Majlis 92% co-founder Match" />
            <img src="/manus-storage/majlis-profile_981e9de7.png" alt="Majlis AI Profile & scan results" />
            <img src="/manus-storage/majlis-deal-room_f76e4ef4.png" alt="Majlis Investor Deal Room" />
          </div>
        </section>
        <section className="majlis-section majlis-community">
          <div className="majlis-section__rail"><span>THE NETWORK</span><b>03</b></div>
          <div className="majlis-split">
            <div><span className="majlis-eyebrow">A global network of builders and backers.</span><h2>Connect people,<br /><em>projects, and capital.</em></h2></div>
            <p>Designed for founders launching MVPs, investors sourcing deals, engineers joining matched projects, scientists forming research teams, and students finding mentors.</p>
          </div>
          <div className="majlis-community__visual">
            <img src="/manus-storage/majlis-community_003d4adc.png" alt="Majlis global community, events, and world map" />
          </div>
        </section>
      </main>
      <footer className="site-footer majlis-footer"><img className="site-footer__brand" src="/manus-storage/maybei-logo-lockup-no-tagline-approved-cropped_d2852528.webp" alt="maybei" /><p>© 2026 maybei. Majlis — AI network for human potential.</p><Link href="/">Back to maybei</Link></footer>
    </div>
  );
}
