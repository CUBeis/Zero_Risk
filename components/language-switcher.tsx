"use client";

import { usePathname, useRouter } from "next/navigation";
import { Locale, locales } from "@/lib/i18n";

type Props = {
  currentLocale: Locale;
};

export function LanguageSwitcher({ currentLocale }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  const onChange = (nextLocale: Locale) => {
    const segments = pathname.split("/").filter(Boolean);
    segments[0] = nextLocale;
    router.push(`/${segments.join("/")}`);
  };

  return (
    <div className="flex items-center gap-1 rounded-full border border-primary/30 bg-secondary px-2 py-1 text-sm dark:bg-dark">
      {locales.map((locale) => (
        <button
          key={locale}
          type="button"
          onClick={() => onChange(locale)}
          className={`rounded-full px-2 py-1 transition ${
            locale === currentLocale
              ? "bg-primary text-secondary"
              : "text-dark hover:bg-primary/10 dark:text-secondary"
          }`}
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
