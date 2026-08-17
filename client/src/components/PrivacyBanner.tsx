/* Midnight Signal Matrix: restrained dark consent surface with one lime decision signal. */
import { useEffect, useState } from "react";

const STORAGE_KEY = "maybei-privacy-choice";

export default function PrivacyBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(window.localStorage.getItem(STORAGE_KEY) === null);
  }, []);

  const choose = (choice: "accepted" | "essential") => {
    window.localStorage.setItem(STORAGE_KEY, choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside className="privacy-banner" aria-label="Privacy preferences" role="dialog" aria-live="polite">
      <div>
        <strong>Privacy, without the fog.</strong>
        <p>maybei uses essential storage to keep the site working. No advertising trackers are enabled.</p>
      </div>
      <div className="privacy-banner__actions">
        <button type="button" className="privacy-banner__button privacy-banner__button--quiet" onClick={() => choose("essential")}>Essential only</button>
        <button type="button" className="privacy-banner__button" onClick={() => choose("accepted")}>Okay, continue</button>
      </div>
    </aside>
  );
}
