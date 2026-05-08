import Image from "next/image";
import Link from "next/link";
import { Locale } from "@/lib/i18n";
import { translations } from "@/lib/translations";
import { LanguageSwitcher } from "./language-switcher";
import { ThemeToggle } from "./theme-toggle";

type Props = {
  locale: Locale;
};

export function Navbar({ locale }: Props) {
  const t = translations[locale];

  const links = [
    { href: `/${locale}`, label: t.nav.home },
    { href: `/${locale}#about`, label: t.nav.about },
    { href: `/${locale}/guidelines`, label: t.nav.guidelines },
    { href: `/${locale}/authorities`, label: t.nav.authorities },
    { href: `/${locale}/common-mistakes`, label: t.nav.mistakes },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-primary/20 bg-secondary/85 shadow-[0_4px_26px_rgba(0,0,0,0.08)] backdrop-blur-lg dark:bg-dark/85">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-3">
        <Link href={`/${locale}`} className="group flex items-center gap-3">
          <Image
            src="/logo.jpeg"
            alt="ZERO RISK logo"
            width={52}
            height={52}
            className="rounded-full border border-primary/40 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <span className="bg-gradient-to-r from-primary to-red-500 bg-clip-text text-lg font-extrabold tracking-wide text-transparent">
            ZERO RISK
          </span>
        </Link>

        <div className="glass-card flex flex-wrap items-center gap-2 rounded-2xl border border-primary/20 px-3 py-2 text-sm font-medium shadow-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-2 py-1 text-dark transition duration-200 hover:-translate-y-0.5 hover:bg-primary/10 hover:text-primary dark:text-secondary"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
          <LanguageSwitcher currentLocale={locale} />
        </div>
      </nav>
    </header>
  );
}
