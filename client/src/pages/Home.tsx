/**
 * Midnight Signal Matrix: asymmetric editorial company page where each section
 * resolves a single idea—friction, method, products, and the people who build.
 */
import { Link } from "wouter";
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  ChevronRight,
  CircleDot,
  Handshake,
  MoveUpRight,
  Sparkles,
  Users,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { LogoMark } from "@/components/LogoMark";
import "./home.css";

const products = [
  {
    number: "01",
    name: "Talio",
    type: "AI HIRING PLATFORM",
    description: "Talio unifies job postings, AI-driven candidate matching, recruiter messaging, interview scheduling and video interviews into one workflow — replacing six disconnected tools and cutting time-to-hire from weeks to days.",
    status: "MVP IN DEVELOPMENT",
    tags: ["AI Matching", "HR Tech", "Recruiting"],
    accent: "blue",
    artifact: "talio",
    featured: true,
  },
  {
    number: "02",
    name: "Majlis",
    type: "AI RELATIONSHIP OS",
    description: "Majlis is an AI relationship operating system connecting people, projects, ideas and capital. It learns what each member is building, then proactively surfaces the right collaborators, partners and investors.",
    status: "SYSTEM DESIGN",
    tags: ["Capital", "AI Networking", "Community"],
    accent: "lime",
    artifact: "orbit",
  },
  {
    number: "03",
    name: "Smart Boots",
    type: "AI SPORTS TECH",
    description: "Football boots with embedded sensors capturing speed, acceleration, distance and impact load during a match. The app turns this into stats, heatmaps and AI recommendations for players and coaches — Match → Performance → Recovery — starting with academies and amateur clubs.",
    status: "CONCEPT READY",
    tags: ["Wearable Sensors", "Sports Analytics", "AI Coaching"],
    accent: "violet",
    artifact: "stride",
  },
  {
    number: "04",
    name: "STRAWPOD",
    type: "AI HYDROPONICS",
    description: "Grow smarter. Even at home. StrawPod AI is a compact smart hydroponic system that monitors plants, controls the growing environment and alerts you when something needs attention. AI and sensor data turn everyday plant care into a simple, measurable process — from growing to harvest.",
    status: "MVP IN DEVELOPMENT",
    tags: ["AI AGRICULTURE", "SMART GROWING", "IOT"],
    accent: "blue",
    artifact: "sprout",
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
        <div className="home-spine" aria-hidden="true"><span>01</span><span>02</span><span>03</span><span>04</span><span>05</span></div>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__grid" aria-hidden="true" />
          <div className="hero__glow hero__glow--violet" aria-hidden="true" />
          <div className="hero__glow hero__glow--blue" aria-hidden="true" />
          <div className="hero__content">
            <div className="hero__intro">
              <span className="section-index">01 / MAYBEI</span>
              <p className="hero__eyebrow"><CircleDot size={14} /> A founder-led AI product company</p>
            </div>

            <h1 id="hero-title">
              We build the AI layer<br />
              for systems people <span>depend on.</span>
            </h1>

            <div className="hero__bottom">
              <p>We turn everyday friction into products with a measurable outcome. Talio is our first proof: one hiring workflow replacing six disconnected tools.</p>
              <div className="hero__actions">
                <a className="button-primary" href="#talio">See the Talio proof <ArrowDown size={17} /></a>
                <a className="text-link" href="#products">View all products <ArrowUpRight size={17} /></a>
              </div>
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
            <span className="section-index">The thesis</span>
            <h2>We don’t chase trends.<br /><em>We make important systems work better.</em></h2>
            <div className="idea__statement">
              <p>Founder-led and product-obsessed, maybei builds the missing AI layer between people and the systems they already rely on — starting with hiring.</p>
              <div className="idea__signals" aria-label="What better means">
                <span>Less handoff</span><span>More signal</span><span>Human control</span><span>Measurable outcome</span>
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
              <span className="section-index">The flagship first</span>
              <h2>Talio proves it.<br /><span>Multiple worlds follow.</span></h2>
            </div>
            <p>One flagship product gives the thesis a job to do. The rest extend the same standard into new systems.</p>
          </div>

          <div className="products__grid">
            {products.map((product) => (
              <article id={product.featured ? "talio" : undefined} key={product.name} className={`product-card product-card--${product.accent} ${product.featured ? "product-card--featured" : ""}`}>
                <div className="product-card__top"><span>{product.number}</span><span>a maybei product</span></div>
                {product.featured ? (
                  <div className="product-card__talio-mark" aria-hidden="true"><img src="/manus-storage/talio-mark-transparent_17c09826.png" alt="" /></div>
                ) : (
                  <div className={`product-card__artifact product-card__artifact--${product.artifact}`} aria-hidden="true">
                    <i /><i /><i />
                  </div>
                )}
                <div className="product-card__body">
                  <span className="product-card__status">{product.status}</span>
                  <span className="product-card__type">{product.type}</span>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  {product.featured && <div className="product-card__proof"><span><b>6 → 1</b> tools into one workflow</span><span><b>Weeks → days</b> time-to-hire</span></div>}
                  <div className="product-card__tags">{product.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  {product.featured && <a className="product-card__detail-link" href="/talio">Explore Talio <ArrowUpRight size={16} /></a>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="audience-cta section-shell" aria-labelledby="audience-title">
          <div className="section-rail"><span>THE NEXT MOVE</span><b>04</b></div>
          <div className="audience-cta__header">
            <span className="section-index">Choose your door</span>
            <h2 id="audience-title">One thesis.<br /><span>Three ways in.</span></h2>
          </div>
          <div className="audience-cta__grid">
            <a className="audience-card audience-card--user" href="#talio"><Users size={22} /><span className="audience-card__label">For people teams</span><h3>Make hiring feel like one workflow.</h3><span className="audience-card__link">See Talio <ArrowUpRight size={16} /></span></a>
            <a className="audience-card audience-card--partner" href="mailto:hello@maybei.com?subject=Partner%20with%20maybei"><Handshake size={22} /><span className="audience-card__label">For partners & capital</span><h3>Back products that remove real friction.</h3><span className="audience-card__link">Talk to the founders <ArrowUpRight size={16} /></span></a>
            <Link className="audience-card audience-card--team" href="/careers"><BriefcaseBusiness size={22} /><span className="audience-card__label">For builders</span><h3>Help build the next proof.</h3><span className="audience-card__link">Join the team <ArrowUpRight size={16} /></span></Link>
          </div>
        </section>

        <section id="founder" className="founder section-shell">
          <div className="section-rail"><span>PEOPLE</span><b>05</b></div>
          <div className="founder__intro">
            <span className="section-index">Founders</span>
            <h2>Built by people<br /><span>who care about what technology does.</span></h2>
          </div>
          <div className="founder__pair">
            <article className="founder-card founder-card--danil">
              <div className="founder-card__image-wrap">
                <span className="founder-card__tag">FOUNDER / DEVELOPER</span>
                <img src="/manus-storage/maybei-founder-danil_6952f69e.jpg" alt="Danil Lobanov, founder and lead developer of maybei" className="founder-card__image" />
              </div>
              <div className="founder-card__meta"><span>01 / DANIL LOBANOV</span><b>Founder · Developer</b></div>
              <div className="founder-card__bio">
                <p>5 years in commercial software development, including backend and full-stack. Founder &amp; Lead Developer, building AI products across HRTech, consumer tech and IoT.</p>
                <p>From music in China to technology — I’m driven by the same idea: connect people, solve real problems, make life simpler.</p>
              </div>
              <span className="founder-card__linkedin">LinkedIn →</span>
            </article>
            <article className="founder-card founder-card--olga">
              <div className="founder-card__image-wrap">
                <span className="founder-card__tag">FOUNDER / AI &amp; QUALITY</span>
                <img src="/manus-storage/maybei-founder-olga-approved-2026_06743f21.png" alt="Olga Kruglova, founder of maybei" className="founder-card__image" />
              </div>
              <div className="founder-card__meta"><span>02 / OLGA KRUGLOVA</span><b>Founder · AI &amp; Quality</b></div>
              <div className="founder-card__bio">
                <p>15+ years in software quality and international ISO 9001 standards. Founder building AI products focused on people, ethics and social impact.</p>
                <p>I believe technology matters most when it solves meaningful problems and creates a better everyday life.</p>
              </div>
              <span className="founder-card__linkedin">LinkedIn →</span>
            </article>
          </div>
          <div className="founder__footer"><div className="founder__note"><Sparkles size={18} /><span>Different backgrounds.<br />Same belief: Technology should serve people.</span></div><Link className="text-link" href="/careers">Meet the way we work <ChevronRight size={17} /></Link></div>
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
        <img className="site-footer__brand" src="/manus-storage/maybei-logo-lockup-no-tagline-approved-cropped_d2852528.webp" alt="maybei" />
        <p>© 2026 maybei. Make it better.</p>
        <a href="mailto:hello@maybei.com">hello@maybei.com</a>
      </footer>
    </div>
  );
}
