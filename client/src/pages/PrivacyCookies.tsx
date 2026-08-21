import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { SiteHeader } from "@/components/SiteHeader";
import "./legal.css";

export default function PrivacyCookies() {
  return (
    <div className="site-shell legal-page">
      <SiteHeader />
      <main className="legal-main">
        <div className="legal-rail" aria-hidden="true"><span>PRIVACY</span><b>01</b></div>
        <article className="legal-document">
          <Link className="legal-back" href="/"><ArrowLeft size={16} /> Back to maybei</Link>
          <p className="legal-kicker">PRIVACY &amp; COOKIES NOTICE</p>
          <h1>Clear about<br /><span>what we collect.</span></h1>
          <p className="legal-updated">Working draft · last updated 17 August 2026</p>
          <p className="legal-lede">This notice explains how the maybei website handles browser storage and messages sent through its contact form. It is written for the current site version and should be reviewed by qualified legal counsel before the company relies on it as a final legal notice.</p>

          <section><h2>1. Who is responsible</h2><p>For this working site version, the responsible team is <strong>maybei</strong>. Questions about this notice or a contact request can be sent through the <Link href="/contact">contact form</Link>. Legal entity, registered address and jurisdiction details will be added once finalised.</p></section>
          <section><h2>2. What we collect</h2><p>When you contact us, we collect your name, email address, optional company name, message, the page source you select and the time you acknowledge this notice. We do not ask for passwords, payment details, precise location or sensitive personal information.</p></section>
          <section><h2>3. Why we use it</h2><p>We use contact details only to read, respond to and reasonably follow up on your message, protect the service from misuse, and keep a business record of the conversation. We do not sell contact information or use it for advertising profiles.</p></section>
          <section><h2>4. Browser storage and cookies</h2><p>This version uses essential browser storage to remember your privacy preference. It does not enable advertising cookies, cross-site tracking or non-essential analytics cookies. Your browser may also create strictly necessary technical storage when serving the site.</p><div className="legal-table"><div><b>Storage</b><b>Purpose</b><b>Duration</b></div><div><span><code>maybei-privacy-choice</code></span><span>Remembers your privacy preference</span><span>Until you change or clear browser storage</span></div></div></section>
          <section><h2>5. Retention and access</h2><p>Contact messages are kept only for the reasonable period needed to respond and maintain a business record. A final retention schedule and formal request process will be published with the company’s confirmed legal entity details. You may use the <Link href="/contact">contact form</Link> to ask about a message you sent.</p></section>
          <section><h2>6. Updates</h2><p>We may update this notice when site practices change. The date at the top of this page identifies the most recent working version.</p></section>
        </article>
      </main>
      <footer className="site-footer legal-footer"><img className="site-footer__brand" src="/manus-storage/maybei-logo-lockup-no-tagline-approved-cropped_d2852528.webp" alt="maybei" /><p>© 2026 maybei. Make it better.</p><div><Link href="/contact">Contact us</Link><Link href="/terms">Terms</Link></div></footer>
    </div>
  );
}
