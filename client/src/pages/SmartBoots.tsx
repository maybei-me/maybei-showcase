import {
  Activity,
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BatteryCharging,
  Bluetooth,
  BrainCircuit,
  Crosshair,
  Gauge,
  Map,
  Radio,
  Sparkles,
  Trophy,
  Waves,
  Zap,
} from "lucide-react";
import { Link } from "wouter";
import { SiteHeader } from "@/components/SiteHeader";
import "./smart-boots.css";

const signals = [
  {
    number: "01",
    icon: Gauge,
    title: "Speed, without guesswork.",
    text: "Track accelerations, maximum sprints and running pace across the moments that decide a match.",
  },
  {
    number: "02",
    icon: Map,
    title: "See the game from the ground up.",
    text: "A match heatmap makes activity zones and field coverage legible after the final whistle.",
  },
  {
    number: "03",
    icon: Zap,
    title: "Measure every strike.",
    text: "Impact data turns contact with the ball into a useful performance signal for training.",
  },
  {
    number: "04",
    icon: Crosshair,
    title: "Keep the team in view.",
    text: "Relative positioning helps turn individual movement into a clearer tactical picture.",
  },
];

const flow = [
  ["01", "Create your player profile", "Position, age and physical context give each match a meaningful baseline."],
  ["02", "Pair the sensor", "Connect before kick-off and confirm the boot is ready for the session."],
  ["03", "Capture the match", "The embedded logger records movement offline while the game stays uninterrupted."],
  ["04", "Sync and understand", "After play, the app turns raw movement into a readable performance story."],
];

const hardware = [
  [Activity, "9-axis IMU", "Accelerometer, gyroscope and magnetometer capture the movement behind the moment."],
  [Radio, "Low-power core", "An efficient microcontroller compresses signals without asking the player to think about it."],
  [Waves, "Match memory", "Flash storage keeps the session available until the next sync."],
  [BatteryCharging, "Wireless charge", "A protected battery concept removes exposed ports from the training routine."],
];

export default function SmartBoots() {
  return (
    <div className="smart-boots-page">
      <SiteHeader />
      <main>
        <section className="smart-boots-hero" aria-labelledby="smart-boots-title">
          <div className="smart-boots-hero__grid" aria-hidden="true" />
          <div className="smart-boots-hero__copy">
            <p className="smart-boots-kicker"><span /> SMART BOOTS · AI SPORTS TECH</p>
            <h1 id="smart-boots-title">Your game.<br /><em>Upgraded.</em></h1>
            <p className="smart-boots-hero__lede">An embedded sensor turns movement on the pitch into performance data, field context and an intelligent next move.</p>
            <div className="smart-boots-hero__actions">
              <a className="smart-boots-button" href="#signals">Explore the system <ArrowDown size={17} /></a>
              <a className="smart-boots-text-link" href="#field-to-phone">From boot to app <ArrowRight size={17} /></a>
            </div>
            <div className="smart-boots-hero__meta">
              <span>CONCEPT READY</span><span>Built for football</span><span>Player + coach</span>
            </div>
          </div>

          <div className="smart-boots-hero__evidence">
            <div className="smart-boots-hero__frame-label"><span>LIVE PERFORMANCE SYSTEM</span><b>03 / 04</b></div>
            <img src="/manus-storage/smart-boots-product-evidence_55cbc20f.png" alt="Smart Boots concept with football boot sensor and English app screens for match performance, heatmaps, training and player progress" />
            <div className="smart-boots-hero__signal smart-boots-hero__signal--one" aria-hidden="true" />
            <div className="smart-boots-hero__signal smart-boots-hero__signal--two" aria-hidden="true" />
          </div>
        </section>

        <section className="smart-boots-manifesto" aria-label="Smart Boots positioning">
          <p>FOOTBALL DOES NOT PAUSE FOR DATA.</p>
          <h2>Smart Boots keeps the data <span>inside the game.</span></h2>
          <p>Designed for the work before, during and after a match — so players can compete first and understand more afterwards.</p>
        </section>

        <section id="signals" className="smart-boots-section smart-boots-signals" aria-labelledby="signals-title">
          <div className="smart-boots-section__rail"><span>THE SIGNALS</span><b>01</b></div>
          <div className="smart-boots-section__body">
            <div className="smart-boots-section__heading">
              <div><p className="smart-boots-kicker"><span /> ONE CHIP · FOUR SIGNALS</p><h2 id="signals-title">Measure what changes the match.</h2></div>
              <p>Not a generic step counter. A football-first system designed around the movements players and coaches actually need to understand.</p>
            </div>
            <div className="smart-boots-signal-grid">
              {signals.map(({ number, icon: Icon, title, text }) => (
                <article className="smart-boots-signal-card" key={number}>
                  <div><span>{number}</span><Icon size={22} strokeWidth={1.55} /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="field-to-phone" className="smart-boots-flow" aria-labelledby="flow-title">
          <div className="smart-boots-flow__art" aria-hidden="true"><div /><div /><div /><span>FIELD<br />→<br />PHONE</span></div>
          <div className="smart-boots-flow__content">
            <p className="smart-boots-kicker"><span /> FIELD TO PHONE</p>
            <h2 id="flow-title">A match becomes a plan.</h2>
            <p className="smart-boots-flow__intro">The system is designed to stay quiet while a player performs — then make the next training choice clearer.</p>
            <ol>
              {flow.map(([number, title, text]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}
            </ol>
          </div>
        </section>

        <section className="smart-boots-analysis" aria-labelledby="analysis-title">
          <div className="smart-boots-analysis__copy">
            <p className="smart-boots-kicker"><span /> NOT JUST MORE NUMBERS</p>
            <h2 id="analysis-title">The next session should know what the last one taught.</h2>
            <p>Smart Boots is being shaped to connect physical output, position and game context. The goal is a useful recommendation — not another dashboard to decode.</p>
            <div className="smart-boots-analysis__roles"><span><Trophy size={18} /> Players see where to improve.</span><span><BrainCircuit size={18} /> Coaches see the wider pattern.</span></div>
          </div>
          <div className="smart-boots-analysis__metric" aria-label="Example AI recommendation">
            <div className="smart-boots-analysis__metric-top"><span>AI COACH · CONCEPT</span><Sparkles size={19} /></div>
            <p>“Your speed dropped late in the second half. Build more interval endurance for the next session.”</p>
            <div><span>POSITION<br /><b>WINGER</b></span><span>FOCUS<br /><b>ENDURANCE</b></span><span>CONTEXT<br /><b>SECOND HALF</b></span></div>
          </div>
        </section>

        <section className="smart-boots-section smart-boots-hardware" aria-labelledby="hardware-title">
          <div className="smart-boots-section__rail"><span>INSIDE THE BOOT</span><b>02</b></div>
          <div className="smart-boots-section__body">
            <div className="smart-boots-section__heading">
              <div><p className="smart-boots-kicker"><span /> HARDWARE CONCEPT</p><h2 id="hardware-title">Small enough to disappear into the game.</h2></div>
              <p>A concept-stage architecture built to avoid bulky processors and exposed hardware under the foot.</p>
            </div>
            <div className="smart-boots-hardware__grid">
              {hardware.map(([Icon, title, text]) => {
                const HardwareIcon = Icon as typeof Activity;
                return <article key={title as string}><HardwareIcon size={24} strokeWidth={1.45} /><h3>{title as string}</h3><p>{text as string}</p></article>;
              })}
            </div>
          </div>
        </section>

        <section className="smart-boots-closing" aria-labelledby="smart-boots-closing-title">
          <p className="smart-boots-kicker"><span /> BUILT FOR PLAYERS · DRIVEN BY DATA</p>
          <h2 id="smart-boots-closing-title">The game is human.<br /><em>The insight can be smarter.</em></h2>
          <p>Smart Boots is a concept from maybei exploring how sports technology can make every match more measurable, useful and personal.</p>
          <Link className="smart-boots-button smart-boots-button--outline" href="/">Back to maybei <ArrowUpRight size={17} /></Link>
        </section>
      </main>
      <footer className="site-footer smart-boots-footer"><img className="site-footer__brand" src="/manus-storage/maybei-logo-lockup-no-tagline-approved-cropped_d2852528.webp" alt="maybei" /><p>© 2026 maybei. Smart Boots — AI sports tech.</p><Link href="/">Back to maybei</Link></footer>
    </div>
  );
}
