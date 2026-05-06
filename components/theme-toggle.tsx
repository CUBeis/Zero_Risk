"use client";

import { useEffect, useRef } from "react";

export function ThemeToggle() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const updateLabel = () => {
      if (!buttonRef.current) return;
      const dark = document.documentElement.classList.contains("dark");
      buttonRef.current.textContent = dark ? "Light" : "Dark";
    };

    updateLabel();
    window.addEventListener("storage", updateLabel);
    return () => window.removeEventListener("storage", updateLabel);
  }, []);

  const toggle = () => {
    const root = document.documentElement;
    const next = !root.classList.contains("dark");
    root.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    if (buttonRef.current) {
      buttonRef.current.textContent = next ? "Light" : "Dark";
    }
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={toggle}
      className="rounded-full border border-primary/30 px-3 py-1 text-xs font-semibold text-dark transition hover:bg-primary/10 dark:text-secondary"
      aria-label="Toggle dark mode"
    >
      Dark
    </button>
  );
}
