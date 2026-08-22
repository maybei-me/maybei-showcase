import { useLayoutEffect } from "react";
import { useLocation } from "wouter";

/** Resets top-level route transitions while preserving deliberate same-page anchors. */
export function ScrollToTop() {
  const [location] = useLocation();

  useLayoutEffect(() => {
    if (window.location.hash) return;

    const resetScroll = () => window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    resetScroll();
    const frame = window.requestAnimationFrame(resetScroll);
    return () => window.cancelAnimationFrame(frame);
  }, [location]);

  return null;
}
