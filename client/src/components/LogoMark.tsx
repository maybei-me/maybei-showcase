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
      src="/manus-storage/maybei-mark-m-approved-transparent_2ee15205.png"
      alt=""
    />
  );
}

type BrandLockupProps = {
  inverse?: boolean;
  compact?: boolean;
};

export function BrandLockup({ inverse = true, compact = false }: BrandLockupProps) {
  return (
    <div className={`brand-lockup ${inverse ? "brand-lockup--inverse" : ""} ${compact ? "brand-lockup--compact" : ""}`}>
      <img
        className="brand-lockup__image"
        src="/manus-storage/maybei-logo-lockup-no-tagline-approved-cropped_d2852528.webp"
        alt=""
      />
    </div>
  );
}
