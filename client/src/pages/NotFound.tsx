/**
 * Midnight Signal Matrix: branded recovery page that preserves orientation and
 * gives visitors a calm, obvious path back to the company site.
 */
import { ArrowLeft, Compass } from "lucide-react";
import { Link } from "wouter";
import { BrandLockup, LogoMark } from "@/components/LogoMark";
import "./not-found.css";

export default function NotFound() {
  return (
    <main className="not-found-shell">
      <div className="not-found-shell__grid" aria-hidden="true" />
      <Link className="not-found-shell__brand" href="/" aria-label="Return to maybei home">
        <BrandLockup compact />
      </Link>
      <section className="not-found-shell__content" aria-labelledby="not-found-title">
        <span className="section-index">404 / LOST SIGNAL</span>
        <h1 id="not-found-title">This route<br />isn’t <span>here.</span></h1>
        <p>The page may have moved, or it may not exist yet. Either way, the useful path starts back at maybei.</p>
        <Link className="button-primary" href="/"><ArrowLeft size={17} /> Back to maybei</Link>
      </section>
      <div className="not-found-shell__mark" aria-hidden="true"><LogoMark /><Compass size={25} /></div>
      <span className="not-found-shell__signal">MAKE IT BETTER.</span>
    </main>
  );
}
