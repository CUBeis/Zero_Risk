import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZERO RISK",
  description: "Emergency, safety guidelines, and risk management portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => { try { const saved = localStorage.getItem("theme"); const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches; const dark = saved ? saved === "dark" : prefersDark; document.documentElement.classList.toggle("dark", dark); } catch (_) {} })();`,
          }}
        />
      </head>
      <body className="min-h-full bg-secondary text-dark">{children}</body>
    </html>
  );
}
