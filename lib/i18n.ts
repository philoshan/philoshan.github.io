import type { Locale } from "./locales";

export const ui = {
  ko: {
    home: {
      heroTitle: "안녕하세요,",
      ctaCv: "CV 보기",
      ctaPortfolio: "포트폴리오 보기",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  en: {
    home: {
      heroTitle: "Hi, I'm",
      ctaCv: "View CV",
      ctaPortfolio: "View portfolio",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
} as const;

export function getUi(locale: Locale) {
  return ui[locale];
}
