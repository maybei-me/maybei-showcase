/* Midnight Signal Matrix: restrained dark consent surface with one lime decision signal. */
import { useEffect, useState } from "react";
import { Link } from "wouter";

const STORAGE_KEY = "maybei-privacy-choice";
const PREFERENCES_EVENT = "maybei:open-privacy-preferences";

type PrivacyChoice = { version: 1; preferences: boolean; updatedAt: string };

function readChoice(): PrivacyChoice | null {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (!stored) return null;
  try {
    const parsed = JSON.parse(stored) as PrivacyChoice;
    if (parsed?.version === 1 && typeof parsed.preferences === "boolean") return parsed;
  } catch {
    if (stored === "accepted") return { version: 1, preferences: true, updatedAt: new Date().toISOString() };
    if (stored === "essential") return { version: 1, preferences: false, updatedAt: new Date().toISOString() };
  }
  return null;
}

export default function PrivacyBanner() {
  const [visible, setVisible] = useState(false);
  const [preferences, setPreferences] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const choice = readChoice();
    setPreferences(choice?.preferences ?? false);
    setVisible(choice === null);
    const openPreferences = () => setVisible(true);
    window.addEventListener(PREFERENCES_EVENT, openPreferences);
    return () => window.removeEventListener(PREFERENCES_EVENT, openPreferences);
  }, []);

  const choose = (nextPreferences: boolean) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: 1, preferences: nextPreferences, updatedAt: new Date().toISOString() } satisfies PrivacyChoice));
    setVisible(false);
  };

  if (!visible) return null;

  if (collapsed) {
    return (
      <aside className="privacy-banner privacy-banner--collapsed" aria-label="Privacy preferences" role="dialog" aria-live="polite">
        <span>Privacy choices</span>
        <button type="button" className="privacy-banner__collapse-trigger" aria-expanded="false" onClick={() => setCollapsed(false)}>Show banner</button>
      </aside>
    );
  }

  return (
    <aside className="privacy-banner" aria-label="Privacy preferences" role="dialog" aria-live="polite">
      <div>
        <div className="privacy-banner__heading"><strong>Privacy, without the fog.</strong><button type="button" className="privacy-banner__collapse-trigger" aria-expanded="true" onClick={() => setCollapsed(true)}>Hide banner</button></div>
        <p className={detailsOpen ? undefined : "privacy-banner__summary"}>We use essential browser storage. No advertising trackers are enabled.{detailsOpen ? <> Read our <Link href="/privacy-cookies">Privacy &amp; Cookies Notice</Link>.</> : null}</p>
        <button type="button" className="privacy-banner__details-trigger" aria-expanded={detailsOpen} onClick={() => setDetailsOpen((isOpen) => !isOpen)}>{detailsOpen ? "Hide details" : "Privacy details"}</button>
      </div>
      <div className="privacy-banner__actions">
        <label className="privacy-banner__toggle"><input type="checkbox" checked={preferences} onChange={(event) => setPreferences(event.target.checked)} /> Remember preferences</label>
        <button type="button" className="privacy-banner__button privacy-banner__button--quiet" onClick={() => choose(false)}>Essential only</button>
        <button type="button" className="privacy-banner__button" onClick={() => choose(preferences)}>Save choice</button>
      </div>
    </aside>
  );
}
