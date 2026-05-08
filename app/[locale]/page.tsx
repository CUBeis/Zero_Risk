import Image from "next/image";
import Link from "next/link";
import dictionary from "@/data/dictionary.json";
import { DictionarySearch } from "@/components/dictionary-search";
import { Locale, locales } from "@/lib/i18n";
import { translations } from "@/lib/translations";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function LocalizedHomePage({ params }: Props) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const typedLocale = locale as Locale;
  const t = translations[typedLocale];
  const aboutIntro = t.sections.aboutIntroBlock;
  const aboutDetail = t.sections.aboutDetailBlock;

  const cards = [
    { title: t.cards.guidelines, href: `/${typedLocale}/guidelines` },
    { title: t.cards.authorities, href: `/${typedLocale}/authorities` },
    { title: t.cards.mistakes, href: `/${typedLocale}/common-mistakes` },
  ];
  const stats = [
    {
      value: "24/7",
      label:
        typedLocale === "ar"
          ? "جاهزية للطوارئ"
          : typedLocale === "es"
            ? "Preparación continua"
            : "Emergency readiness",
    },
    {
      value: "3",
      label:
        typedLocale === "ar"
          ? "لغات مدعومة"
          : typedLocale === "es"
            ? "Idiomas soportados"
            : "Supported languages",
    },
    {
      value: "1000+",
      label:
        typedLocale === "ar"
          ? "مصطلح طوارئ"
          : typedLocale === "es"
            ? "Términos de emergencia"
            : "Emergency terms",
    },
  ];

  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-red-700 to-red-900 px-6 py-12 text-secondary shadow-[0_16px_40px_rgba(204,0,0,0.35)] fade-up md:px-8 md:py-14">
        <div className="pointer-events-none absolute -right-8 -top-8 h-36 w-36 rounded-full bg-white/15 blur-xl" />
        <div className="pointer-events-none absolute -bottom-12 left-10 h-44 w-44 rounded-full bg-black/10 blur-2xl" />
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <span className="mb-3 inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide">
              EMERGENCY PLATFORM
            </span>
            <h1 className="text-4xl font-extrabold md:text-5xl">{t.hero.title}</h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-white/90">{t.hero.subtitle}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={`/${typedLocale}/guidelines`}
                className="rounded-xl bg-white px-4 py-2 font-semibold text-primary transition hover:-translate-y-0.5 hover:bg-white/90"
              >
                {t.nav.guidelines}
              </Link>
              <Link
                href={`/${typedLocale}/authorities`}
                className="rounded-xl border border-white/35 bg-white/10 px-4 py-2 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/20"
              >
                {t.nav.authorities}
              </Link>
            </div>
          </div>
          <div className="glass-card rounded-2xl border border-white/25 p-5 text-dark shadow-xl dark:text-secondary">
            <p className="text-sm font-semibold text-primary">
              {typedLocale === "ar" ? "لوحة سريعة" : typedLocale === "es" ? "Panel rápido" : "Quick dashboard"}
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
              {stats.map((item) => (
                <div key={item.value + item.label} className="rounded-xl border border-primary/20 bg-primary/5 p-3 text-center">
                  <p className="text-xl font-extrabold text-primary">{item.value}</p>
                  <p className="mt-1 text-xs font-medium text-dark/80 dark:text-secondary/80">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <DictionarySearch locale={typedLocale} entries={dictionary} />

      <div className="grid gap-6 md:grid-cols-2">
        <section className="glass-card fade-up rounded-3xl border border-primary/20 p-6">
          <h2 className="mb-2 text-2xl font-semibold text-primary">Dictionary Showcase</h2>
          <div className="mb-4 overflow-hidden rounded-2xl border border-primary/20 bg-white shadow-sm dark:bg-zinc-900">
            <Image
              src="/api/assets/cover/image"
              alt="Dictionary cover"
              width={900}
              height={675}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <p className="mb-4 text-dark/80 dark:text-secondary/80">
            Emergency dictionary cover and reference material from the provided Arabic source.
          </p>
          <a
            href="/api/assets/cover"
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-xl border border-primary px-4 py-2 font-semibold text-primary transition duration-200 hover:-translate-y-0.5 hover:bg-primary hover:text-secondary"
          >
            Open Book Cover (PDF)
          </a>
        </section>

        <section id="about" className="glass-card fade-up rounded-3xl border border-primary/20 p-6">
          <h2 className="mb-4 text-2xl font-semibold text-primary">{t.sections.aboutTitle}</h2>
          <div className="space-y-4">
            <article
              dir={aboutIntro.dir}
              className="rounded-xl border border-primary/15 bg-primary/5 p-4"
            >
              <h3 className="text-sm font-bold text-primary">{aboutIntro.label}</h3>
              <p className="mt-2 text-sm leading-7 text-dark/85 dark:text-secondary/85">
                {aboutIntro.summary}
              </p>
            </article>
          </div>

          <div className="mt-6 space-y-5">
            <article dir={aboutDetail.dir} className="border-t border-primary/15 pt-5">
              <p className="text-sm font-bold text-primary">{aboutDetail.label}</p>
              <h3 className="mt-2 text-lg font-semibold text-dark dark:text-secondary">
                {aboutDetail.projectTitle}
              </h3>
              <p className="mt-2 text-sm leading-7 text-dark/80 dark:text-secondary/80">
                {aboutDetail.projectText}
              </p>
              <h3 className="mt-4 text-lg font-semibold text-dark dark:text-secondary">
                {aboutDetail.missionTitle}
              </h3>
              <p className="mt-2 text-sm leading-7 text-dark/80 dark:text-secondary/80">
                {aboutDetail.missionText}
              </p>
            </article>
          </div>
        </section>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">{t.sections.quickLinks}</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {cards.map((card, index) => (
            <Link
              key={card.href}
              href={card.href}
              className="group glass-card rounded-2xl border border-primary/25 p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-xl"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div className="mb-3 h-1.5 w-12 rounded-full bg-primary transition-all duration-300 group-hover:w-20" />
              <h3 className="text-lg font-semibold text-dark dark:text-secondary">{card.title}</h3>
              <p className="mt-2 text-sm text-dark/70 dark:text-secondary/70">
                {typedLocale === "ar" ? "استعرض التفاصيل" : typedLocale === "es" ? "Ver detalles" : "Explore section details"}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
