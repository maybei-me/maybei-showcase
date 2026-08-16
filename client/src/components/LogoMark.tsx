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
      viewBox="0 0 920 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gradientId} x1="100" y1="80" x2="820" y2="250" gradientUnits="userSpaceOnUse">
          <stop stopColor={mono ? "currentColor" : "#5263FF"} />
          <stop offset="1" stopColor={mono ? "currentColor" : "#9C50FF"} />
        </linearGradient>
      </defs>
      <path
        d="M126 226L280 82Q295 67 310 82L465 226Q479 240 493 225L649 82Q664 67 679 82L834 226"
        stroke={`url(#${gradientId})`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="68"
      />
      <circle cx="700" cy="43" fill="#C6F34D" r="26" />
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
