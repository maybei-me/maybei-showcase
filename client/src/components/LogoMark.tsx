/**
 * Midnight Signal Matrix: every logo usage comes from the provided approved
 * M or horizontal lockup asset; the logo geometry is never redrawn in code.
 */
type LogoMarkProps = {
  className?: string;
};

export function LogoMark({ className = "" }: LogoMarkProps) {
  return (
    <img
      aria-hidden="true"
      className={className}
      src="/assets/maybei-mark-night-pulse.png"
      alt=""
    />
  );
}

type BrandLockupProps = {
  inverse?: boolean;
  compact?: boolean;
  className?: string;
};

export function BrandLockup({ inverse = true, compact = false, className = "" }: BrandLockupProps) {
  const classes = [
    "brand-lockup",
    inverse ? "brand-lockup--inverse" : "",
    compact ? "brand-lockup--compact" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      <img className="brand-lockup__image" src="/assets/maybei-lockup-night-pulse.png" alt="maybei" />
    </div>
  );
}
