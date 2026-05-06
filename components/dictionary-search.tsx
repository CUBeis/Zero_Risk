"use client";

import { useMemo, useState } from "react";
import { Locale } from "@/lib/i18n";
import { translations } from "@/lib/translations";

type DictionaryEntry = {
  ar: string;
  en: string;
  es: string;
};

type Props = {
  locale: Locale;
  entries: DictionaryEntry[];
};

export function DictionarySearch({ locale, entries }: Props) {
  const [query, setQuery] = useState("");
  const t = translations[locale];

  const matches = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return [];
    return entries
      .filter(
        (entry) =>
          entry.ar.toLowerCase().includes(normalizedQuery) ||
          entry.en.toLowerCase().includes(normalizedQuery) ||
          entry.es.toLowerCase().includes(normalizedQuery),
      )
      .slice(0, 8);
  }, [entries, query]);

  return (
    <section className="glass-card fade-up rounded-3xl border border-primary/25 p-6 shadow-[0_12px_30px_rgba(204,0,0,0.08)]">
      <h2 className="mb-4 text-xl font-semibold text-primary">{t.search.title}</h2>
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={t.search.placeholder}
        className="w-full rounded-xl border border-primary/30 bg-secondary/80 px-4 py-3 outline-none ring-primary transition focus:scale-[1.01] focus:ring-2 dark:bg-zinc-900"
      />

      <div className="mt-4 space-y-3">
        {query.trim() && matches.length === 0 && (
          <p className="text-sm text-dark/80 dark:text-secondary/80">{t.search.noResults}</p>
        )}

        {matches.map((entry) => (
          <article
            key={`${entry.ar}-${entry.en}-${entry.es}`}
            className="rounded-xl border border-primary/20 bg-primary/5 p-4 transition duration-200 hover:-translate-y-0.5 hover:shadow-sm"
          >
            <p>
              <strong>{t.search.arabic}:</strong> {entry.ar}
            </p>
            <p>
              <strong>{t.search.english}:</strong> {entry.en || "-"}
            </p>
            <p>
              <strong>{t.search.spanish}:</strong> {entry.es || "-"}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
