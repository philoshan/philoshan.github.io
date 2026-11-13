import type { Locale } from "@/lib/locales";

/** 헤더 로고·탭 제목 등 블로그 브랜드 */
export const siteConfig = {
  name: "philoshan",
  siteTitle: "philoshan",
  defaultDescription:
    "한지승(Jiseung Han) — 한양대학교 ERICA 로봇공학과 재학, philoshan 블로그·포트폴리오.",
  /** 홈 히어로 등에 쓰는 실명 */
  displayName: {
    ko: "한지승",
    en: "Jiseung Han",
  } satisfies Record<Locale, string>,
  /** 홈 히어로 자기소개 */
  intro: {
    ko: "안녕하세요. 저는 한양대학교 ERICA 로봇공학과에 재학중인 한지승이라고 합니다.",
    en: "Hello. I'm Jiseung Han, an undergraduate in Robotics Engineering at Hanyang University ERICA.",
  } satisfies Record<Locale, string>,
  /**
   * 메인 페이지 버튼 링크.
   * - PDF로 올릴 경우: public/cv.pdf, public/portfolio.pdf 에 파일을 넣으면 됨
   * - 외부 링크(노션, 구글 드라이브 등)라면 "https://..." 주소로 바꾸면 됨
   */
  cvUrl: "/CV.Jiseung_Han.pdf",
  portfolioUrl: "/portfolio.pdf",
  email: "philoshan@hanyang.ac.kr",
  githubUrl: "https://github.com/philoshan",
} as const;

export function getDisplayName(locale: Locale): string {
  return siteConfig.displayName[locale];
}

export function getIntro(locale: Locale): string {
  return siteConfig.intro[locale];
}
