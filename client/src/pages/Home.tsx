/**
 * Midnight Signal Matrix: asymmetric editorial company page where each section
 * resolves a single idea—friction, method, products, and the people who build.
 */
import { Link } from "wouter";
import {
  ArrowDown,
  ArrowUpRight,
  ChevronRight,
  CircleDot,
  MoveUpRight,
  Sparkles,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { LogoMark } from "@/components/LogoMark";
import "./home.css";

const products = [
  {
    number: "01",
    name: "talio",
    type: "Direct opportunity platform",
    description: "Making professional opportunities more direct, transparent and human.",
    accent: "blue",
    artifact: "interface",
    image: "/manus-storage/talio-product-preview_5849214d.png",
    featured: true,
  },
  {
    number: "02",
    name: "majlis",
    type: "Better relationships",
    description: "Helping the right collaborators, partners and opportunities find each other.",
    accent: "lime",
    artifact: "orbit",
  },
  {
    number: "03",
    name: "strawpod AI",
    type: "Better everyday growing",
    description: "Using AI, sensors and automation to make growing simpler and more predictable.",
    accent: "violet",
    artifact: "sprout",
  },
  {
    number: "04",
    name: "smart boots",
    type: "Better training feedback",
    description: "Turning movement into insight that helps athletes train and perform better.",
    accent: "blue",
    artifact: "stride",
  },
];

const principles = [
  { value: "01", title: "Find", copy: "We notice systems people have learned to tolerate." },
  { value: "02", title: "Rebuild", copy: "We redesign the critical path around the real result." },
  { value: "03", title: "Prove", copy: "We measure what became clearer, faster or more useful." },
];

export default function Home() {
  return (
    <div className="site-shell home-shell">
      <SiteHeader />
      <main>
        <div className="home-spine" aria-hidden="true"><span>01</span><span>02</span><span>03</span><span>04</span></div>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__grid" aria-hidden="true" />
          <div className="hero__glow hero__glow--violet" aria-hidden="true" />
          <div className="hero__glow hero__glow--blue" aria-hidden="true" />
          <div className="hero__content">
            <div className="hero__intro">
              <span className="section-index">01 / MAYBEI</span>
              <p className="hero__eyebrow"><CircleDot size={14} /> An AI product company</p>
            </div>

            <h1 id="hero-title">
              Familiar systems<br />
              should work <span>better.</span>
            </h1>

            <div className="hero__bottom">
              <p>We make AI products that remove friction from the systems people use every day.</p>
              <a className="button-primary" href="#products">
                Explore what we’re building <ArrowDown size={17} />
              </a>
            </div>
          </div>

          <div className="hero__mark-stage" aria-hidden="true">
            <div className="hero__m-line hero__m-line--one" />
            <div className="hero__m-line hero__m-line--two" />
            <div className="hero__signal"><span /> A better standard</div>
            <LogoMark className="hero__mark" />
          </div>

          <a className="hero__scroll" href="#idea"><span /> Scroll to discover</a>
        </section>

        <section id="idea" className="idea section-shell">
          <div className="section-rail"><span>THE IDEA</span><b>01</b></div>
          <div className="idea__copy">
            <span className="section-index">The idea</span>
            <h2>We don’t build what’s already working.<br /><em>We build what should work better.</em></h2>
            <div className="idea__statement">
              <p>maybei looks at familiar systems people have learned to tolerate — then finds the friction nobody fixed.</p>
              <div className="idea__signals" aria-label="What better means">
                <span>Speed</span><span>Clarity</span><span>Trust</span><span>Control</span><span>Results</span>
              </div>
            </div>
          </div>
        </section>

        <section id="method" className="method section-shell">
          <div className="section-rail"><span>METHOD</span><b>02</b></div>
          <div className="method__header">
            <span className="section-index">The maybei method</span>
            <h2>Find the friction.<br /><span>Make it better.</span></h2>
          </div>
          <div className="method__list">
            {principles.map((principle) => (
              <article className="method__item" key={principle.value}>
                <div className="method__top"><span>{principle.value}</span><MoveUpRight size={19} /></div>
                <h3>{principle.title}</h3>
                <p>{principle.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="products" className="products section-shell">
          <div className="section-rail"><span>PROJECTS</span><b>03</b></div>
          <div className="products__header">
            <div>
              <span className="section-index">The portfolio</span>
              <h2>One standard.<br /><span>Multiple worlds.</span></h2>
            </div>
            <p>Different categories. One belief: technology should serve people.</p>
          </div>

          <div className="products__grid">
            {products.map((product) => (
              <article key={product.name} className={`product-card product-card--${product.accent} ${product.featured ? "product-card--featured" : ""}`}>
                <div className="product-card__top"><span>{product.number}</span><span>a maybei product</span></div>
                {product.featured && (
                  <div className="product-card__preview">
                    <img src={product.image} alt="talio platform product preview" />
                  </div>
                )}
                {!product.featured && (
                  <div className={`product-card__artifact product-card__artifact--${product.artifact}`} aria-hidden="true">
                    <i /><i /><i />
                  </div>
                )}
                <div className="product-card__body">
                  <span className="product-card__type">{product.type}</span>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </div>
                <button type="button" className="product-card__action" aria-label={`Read about ${product.name}`}>
                  <ArrowUpRight size={19} />
                </button>
              </article>
            ))}
          </div>
        </section>

        <section id="founder" className="founder section-shell">
          <div className="section-rail"><span>PEOPLE</span><b>04</b></div>
          <div className="founder__grid">
            <div className="founder__content">
              <span className="section-index">The people behind the standard</span>
              <h2>Small team.<br /><span>Big ownership.</span></h2>
              <p>We work directly across product, engineering and design — from the first question to the real-world result.</p>
              <div className="founder__note"><Sparkles size={18} /><span>Quality is not a finish line. It is a way of deciding what to build next.</span></div>
              <Link className="text-link" href="/careers">Meet the way we work <ChevronRight size={17} /></Link>
            </div>
            <div className="founder__image-wrap">
              <span className="founder__tag">FOUNDER / QUALITY / AI PRODUCTS</span>
              <img src="/manus-storage/maybei-founder-olga_a9262691.png" alt="Olga Kruglova, founder of maybei" className="founder__image" />
            </div>
          </div>
        </section>

        <section className="careers-cta">
          <div className="careers-cta__grain" aria-hidden="true" />
          <span className="section-index">Careers at maybei</span>
          <h2>We’re building.<br /><span>Come build with us.</span></h2>
          <p>Different problems. Different industries. One better standard.</p>
          <Link className="button-primary button-primary--large" href="/careers">Explore careers <ArrowUpRight size={18} /></Link>
          <LogoMark className="careers-cta__mark" />
        </section>
      </main>
      <footer className="site-footer">
        <div className="site-footer__brand"><LogoMark /> <span>maybei</span></div>
        <p>© 2026 maybei. Make it better.</p>
        <a href="mailto:hello@maybei.com">hello@maybei.com</a>
      </footer>
    </div>
  );
}
