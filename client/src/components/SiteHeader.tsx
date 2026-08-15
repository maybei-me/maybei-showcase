/**
 * Midnight Signal Matrix: low-noise navigation with a compact brand anchor
 * and lime only reserved for decisive calls to action.
 */
import { Link, useLocation } from "wouter";
import { ArrowUpRight } from "lucide-react";
import { BrandLockup } from "./LogoMark";

const navItems = [
  { label: "Idea", href: "/#idea" },
  { label: "Method", href: "/#method" },
  { label: "Products", href: "/#products" },
  { label: "Founder", href: "/#founder" },
];

export function SiteHeader() {
  const [location] = useLocation();
  const isHome = location === "/";

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="site-header__brand" aria-label="maybei home">
          <BrandLockup compact />
        </Link>

        <nav className="site-header__nav" aria-label="Primary navigation">
          {isHome && navItems.map((item) => (
            <a key={item.label} href={item.href}>{item.label}</a>
          ))}
          {!isHome && <Link href="/">Back to maybei</Link>}
          <Link href="/careers">Careers</Link>
        </nav>

        <Link className="site-header__cta" href="/careers">
          Build with us <ArrowUpRight size={15} strokeWidth={2.25} />
        </Link>
      </div>
    </header>
  );
}
