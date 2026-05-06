export const locales = ["ar", "en", "es"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ar";

export const localeDirection: Record<Locale, "rtl" | "ltr"> = {
  ar: "rtl",
  en: "ltr",
  es: "ltr",
};

export const localeLabels: Record<Locale, string> = {
  ar: "العربية",
  en: "English",
  es: "Español",
};

export const navPaths = ["", "/guidelines", "/authorities", "/common-mistakes"];
