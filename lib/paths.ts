import type { Locale } from "./locales";

export function withLocale(locale: Locale, path: string) {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${p === "/" ? "" : p}`;
}
