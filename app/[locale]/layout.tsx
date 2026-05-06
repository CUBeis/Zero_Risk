import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { localeDirection, locales, type Locale } from "@/lib/i18n";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const typedLocale = locale as Locale;

  return (
    <div
      lang={typedLocale}
      dir={localeDirection[typedLocale]}
      className="animated-grid relative min-h-screen overflow-x-hidden"
    >
      <div className="pointer-events-none absolute -top-16 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl dark:bg-primary/25" />
      <div className="pointer-events-none absolute bottom-10 right-0 h-64 w-64 rounded-full bg-primary/15 blur-3xl dark:bg-primary/20" />
      <Navbar locale={typedLocale} />
      <main className="relative mx-auto w-full max-w-7xl flex-1 px-4 py-10">{children}</main>
      <Footer />
    </div>
  );
}
