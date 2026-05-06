import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="animated-grid relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-10">
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 right-10 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />

      <section className="glass-card fade-up relative z-10 w-full max-w-4xl rounded-3xl border border-primary/25 p-8 shadow-[0_20px_50px_rgba(204,0,0,0.18)] md:p-12">
        <div className="mb-8 flex items-center gap-4">
          <Image
            src="/api/assets/logo"
            alt="ZERO RISK logo"
            width={72}
            height={72}
            className="float-soft rounded-full border border-primary/30 object-cover"
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">ZERO RISK</p>
            <h1 className="text-3xl font-extrabold text-dark dark:text-secondary md:text-5xl">
              Emergency & Safety Platform
            </h1>
          </div>
        </div>

        <p className="max-w-3xl text-base leading-8 text-dark/80 dark:text-secondary/85 md:text-lg">
          Professional multilingual platform for emergency awareness, safety guidelines, and risk
          management. Choose your preferred language to continue.
        </p>

        <div className="mt-8 grid gap-3 md:grid-cols-3">
          <Link
            href="/ar"
            className="rounded-2xl border border-primary/30 bg-primary px-5 py-4 text-center font-bold text-secondary transition duration-300 hover:-translate-y-1 hover:bg-red-700"
          >
            العربية (AR)
          </Link>
          <Link
            href="/en"
            className="rounded-2xl border border-primary/30 bg-white px-5 py-4 text-center font-bold text-primary transition duration-300 hover:-translate-y-1 hover:bg-primary/5 dark:bg-zinc-900"
          >
            English (EN)
          </Link>
          <Link
            href="/es"
            className="rounded-2xl border border-primary/30 bg-white px-5 py-4 text-center font-bold text-primary transition duration-300 hover:-translate-y-1 hover:bg-primary/5 dark:bg-zinc-900"
          >
            Español (ES)
          </Link>
        </div>
      </section>
    </main>
  );
}
