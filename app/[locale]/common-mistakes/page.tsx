import { notFound } from "next/navigation";
import { Locale, locales } from "@/lib/i18n";
import { translations } from "@/lib/translations";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function CommonMistakesPage({ params }: Props) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  const t = translations[locale as Locale];

  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold text-primary">{t.nav.mistakes}</h1>
      <div className="rounded-xl border border-dashed border-primary/40 bg-white p-8 text-center dark:bg-zinc-900">
        <p className="text-lg font-semibold text-dark dark:text-secondary">{t.placeholders.comingSoon}</p>
      </div>
    </section>
  );
}
