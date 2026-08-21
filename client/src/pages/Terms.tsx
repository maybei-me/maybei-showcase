import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { SiteHeader } from "@/components/SiteHeader";
import "./legal.css";

export default function Terms() {
  return (
    <div className="site-shell legal-page">
      <SiteHeader />
      <main className="legal-main">
        <div className="legal-rail" aria-hidden="true"><span>TERMS</span><b>02</b></div>
        <article className="legal-document">
          <Link className="legal-back" href="/"><ArrowLeft size={16} /> Back to maybei</Link>
          <p className="legal-kicker">TERMS &amp; CONDITIONS</p>
          <h1>Built with intent.<br /><span>Used with care.</span></h1>
          <p className="legal-updated">Working draft · last updated 17 August 2026</p>
          <p className="legal-lede">These Terms &amp; Conditions are a working website draft for maybei. They should be reviewed and completed with the final legal entity, registered address and governing-law information before being relied upon as a binding agreement.</p>

          <section><h2>1. Using this website</h2><p>You may view and use this website for lawful, personal or business-information purposes. You must not interfere with its operation, attempt unauthorised access, introduce harmful code, or use it in a way that harms other people or the maybei team.</p></section>
          <section><h2>2. Product information</h2><p>maybei presents product concepts, product directions and developing services. Descriptions, visuals and timelines may change as products are researched, built and tested. Unless a separate written agreement says otherwise, site content is informational and does not create an offer, commitment or guarantee.</p></section>
          <section><h2>3. Intellectual property</h2><p>The maybei name, logos, website design, copy and product materials are protected by applicable intellectual-property rights. You may not copy, adapt, distribute or use them commercially without prior written permission from maybei, except where law permits.</p></section>
          <section><h2>4. Contact submissions</h2><p>When you submit a message through the contact form, you confirm that the information is accurate, that you are entitled to share it, and that it does not include confidential or highly sensitive information that should not be sent through a website form. Our data practices are described in the <Link href="/privacy-cookies">Privacy &amp; Cookies Notice</Link>.</p></section>
          <section><h2>5. Third-party links</h2><p>This website may link to external services. Those sites operate under their own terms and privacy practices, and maybei is not responsible for their availability or content.</p></section>
          <section><h2>6. Changes and applicable law</h2><p>We may revise these Terms when the website or products change. The governing law and venue will be specified when maybei’s legal entity details are finalised. Until then, these working terms are not a substitute for a reviewed legal agreement.</p></section>
        </article>
      </main>
      <footer className="site-footer legal-footer"><img className="site-footer__brand" src="/manus-storage/maybei-logo-lockup-no-tagline-approved-cropped_d2852528.webp" alt="maybei" /><p>© 2026 maybei. Make it better.</p><div><Link href="/privacy-cookies">Privacy &amp; Cookies</Link><Link href="/contact">Contact us</Link></div></footer>
    </div>
  );
}
