/**
 * Midnight Signal Matrix: every logo usage comes from the provided approved
 * square M or horizontal lockup asset; the M geometry is never redrawn in code.
 */
type LogoMarkProps = {
  className?: string;
};

export function LogoMark({ className = "" }: LogoMarkProps) {
  return (
    <img
      aria-hidden="true"
      className={className}
      src="/maybei-favicon-v2.png"
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
      <img className="brand-lockup__image" src="/assets/maybei-logo-original.png" alt="maybei" />
    </div>
  );
}
