/**
 * Midnight Signal Matrix: low-noise navigation with a compact brand anchor
 * and lime only reserved for decisive calls to action.
 */
import { Link, useLocation } from "wouter";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const navItems = [
  { label: "Idea", href: "/#idea" },
  { label: "Method", href: "/#method" },
  { label: "Founder", href: "/#founder" },
];

export function SiteHeader() {
  const [location] = useLocation();
  const isHome = location === "/";
  const { language, setLanguage } = useLanguage();

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="site-header__brand" aria-label="maybei home">
          <img
            className="site-header__full-lockup"
            src="/manus-storage/maybei-logo-lockup-no-tagline-approved-cropped_d2852528.webp"
            alt="maybei"
          />
        </Link>

        <nav className="site-header__nav" aria-label="Primary navigation">
          {isHome && navItems.map((item) => (
            <a key={item.label} href={item.href}>{item.label}</a>
          ))}
          {!isHome && <Link href="/">Back to maybei</Link>}
          <Link href="/careers">Careers</Link>
        </nav>

        <div className="site-header__actions">
          <div className="site-language" data-language-control role="group" aria-label={language === "ru" ? "Выбор языка" : "Language selection"}>
            <button type="button" className={language === "en" ? "is-active" : ""} onClick={() => setLanguage("en")} aria-pressed={language === "en"}>EN</button>
            <span aria-hidden="true">/</span>
            <button type="button" className={language === "ru" ? "is-active" : ""} onClick={() => setLanguage("ru")} aria-pressed={language === "ru"}>RU</button>
            <span aria-hidden="true">/</span>
            <button type="button" className={language === "ar" ? "is-active" : ""} onClick={() => setLanguage("ar")} aria-pressed={language === "ar"}>AR</button>
          </div>
          <Link className="site-header__cta" href="/careers">
            Build with us <ArrowUpRight size={15} strokeWidth={2.25} />
          </Link>
        </div>
      </div>
    </header>
  );
}
