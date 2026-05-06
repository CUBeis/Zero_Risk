export function Footer() {
  return (
    <footer className="mt-12 border-t border-primary/25 bg-dark text-secondary">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-7 text-sm">
        <p className="font-medium">© {new Date().getFullYear()} ZERO RISK</p>
        <p className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-primary">
          Emergency Safety & Risk Awareness
        </p>
      </div>
    </footer>
  );
}
