import type { Locale } from "./locales";

export const ui = {
  ko: {
    home: {
      ctaCv: "CV",
      ctaPortfolio: "포트폴리오",
    },
  },
  en: {
    home: {
      ctaCv: "CV",
      ctaPortfolio: "Portfolio",
    },
  },
} as const;

export function getUi(locale: Locale) {
  return ui[locale];
}
