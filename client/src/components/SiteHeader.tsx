/**
 * Midnight Signal Matrix: low-noise navigation with a compact brand anchor
 * and lime only reserved for decisive calls to action.
 */
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { BrandLockup } from "@/components/LogoMark";

const navItems = [
  { label: "Idea", href: "/#idea" },
  { label: "Method", href: "/#method" },
  { label: "Founder", href: "/#founder" },
];

export function SiteHeader() {
  const [location] = useLocation();
  const isHome = location === "/";
  const [activeHomeSection, setActiveHomeSection] = useState<string | null>(null);
  const isCareers = location === "/careers";
  const currentPage = {
    "/talio": "Talio",
    "/talio-v2": "Talio v2",
    "/majlis": "Majlis",
    "/smart-boots": "Smart Boots",
    "/contact": "Contact",
    "/privacy-cookies": "Privacy & Cookies",
    "/terms": "Terms & Conditions",
    "/careers": "Careers",
  }[location];
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    if (!isHome) {
      setActiveHomeSection(null);
      return;
    }

    const sections = navItems
      .map(({ href }) => document.querySelector<HTMLElement>(href.slice(1)))
      .filter((section): section is HTMLElement => Boolean(section));

    let ticking = false;
    const updateActiveSection = () => {
      const headerOffset = 116;
      const activeSection = sections.reduce<string | null>((active, section) => (
        section.getBoundingClientRect().top <= headerOffset ? section.id : active
      ), null);
      setActiveHomeSection(activeSection);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="site-header__brand" aria-label="maybei home">
          <BrandLockup className="site-header__full-lockup" />
        </Link>

        <nav className="site-header__nav" aria-label="Primary navigation">
          {isHome && navItems.map((item) => {
            const isActive = activeHomeSection === item.href.slice(2);
            return (
              <a key={item.label} href={item.href} className={isActive ? "is-active" : undefined} aria-current={isActive ? "location" : undefined}>{item.label}</a>
            );
          })}
          {!isHome && <Link href="/">Back to maybei</Link>}
          {!isHome && currentPage && <span className="site-header__current" aria-current="page">{currentPage}</span>}
          {!isCareers && <Link href="/careers">Careers</Link>}
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
