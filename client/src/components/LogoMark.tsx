/**
 * Midnight Signal Matrix: proprietary soft M mark with one signal point;
 * used as the constant brand anchor across the maybei experience.
 */
type LogoMarkProps = {
  className?: string;
  mono?: boolean;
};

export function LogoMark({ className = "", mono = false }: LogoMarkProps) {
  const gradientId = mono ? "maybei-mono" : "maybei-gradient";

  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 108 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gradientId} x1="6" y1="14" x2="96" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor={mono ? "currentColor" : "#5263FF"} />
          <stop offset="1" stopColor={mono ? "currentColor" : "#9C50FF"} />
        </linearGradient>
      </defs>
      <path
        d="M10 53L34 20L53 47L75 20L94 53"
        stroke={`url(#${gradientId})`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="13"
      />
      <circle cx="88.5" cy="9.5" fill="#C6F34D" r="5.5" />
    </svg>
  );
}

type BrandLockupProps = {
  inverse?: boolean;
  compact?: boolean;
};

export function BrandLockup({ inverse = true, compact = false }: BrandLockupProps) {
  return (
    <div className={`brand-lockup ${inverse ? "brand-lockup--inverse" : ""} ${compact ? "brand-lockup--compact" : ""}`}>
      <LogoMark className="brand-lockup__mark" />
      <span className="brand-lockup__word">maybe<span className="brand-lockup__i-dot">i</span></span>
      {!compact && <span className="brand-lockup__line">MAKE IT BETTER.</span>}
    </div>
  );
}
