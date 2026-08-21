import { useEffect } from "react";
import { useLocation } from "wouter";

/** Resets top-level route transitions while preserving deliberate same-page anchors. */
export function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    if (!window.location.hash) window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]);

  return null;
}
