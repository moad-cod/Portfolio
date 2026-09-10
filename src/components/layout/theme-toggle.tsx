"use client";

import { useSyncExternalStore } from "react";
import { SunMoonIcon } from "@/components/ui/icons";

const eventName = "portfolio-theme-change";
function subscribe(callback: () => void) {
  window.addEventListener(eventName, callback);
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => {
    window.removeEventListener(eventName, callback);
    observer.disconnect();
  };
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, () => document.documentElement.dataset.theme ?? "dark", () => "unknown");
  const label = theme === "unknown" ? "Toggle color theme" : `Switch to ${theme === "light" ? "dark" : "light"} mode`;
  function toggleTheme() {
    const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("portfolio-theme", next); } catch { /* Storage may be unavailable. */ }
    window.dispatchEvent(new Event(eventName));
  }
  return (
    <button aria-label={label} title={label} className="icon-button" onClick={toggleTheme} type="button">
      <SunMoonIcon className="size-4" />
    </button>
  );
}
