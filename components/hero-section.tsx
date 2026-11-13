import type { Locale } from "@/lib/locales";
import { getUi } from "@/lib/i18n";
import { getDisplayName, getIntro, siteConfig } from "@/data/site";

/** public/ 안의 파일("/cv.pdf" 등)은 GitHub Pages basePath를 붙여야 함. 외부 URL은 그대로. */
function resolveHref(url: string) {
  return url.startsWith("/") ? `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${url}` : url;
}

export function HeroSection({ locale }: { locale: Locale }) {
  const t = getUi(locale).home;
  return (
    <section className="mx-auto max-w-5xl px-4 pb-16 pt-12 sm:px-6 sm:pt-16">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
        {t.heroTitle}
      </p>
      <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-5xl">
        {getDisplayName(locale)}
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">{getIntro(locale)}</p>
      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href={resolveHref(siteConfig.cvUrl)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-500"
        >
          {t.ctaCv}
        </a>
        <a
          href={resolveHref(siteConfig.portfolioUrl)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-800 transition hover:border-indigo-300 hover:text-indigo-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:hover:border-indigo-500/50"
        >
          {t.ctaPortfolio}
        </a>
      </div>
    </section>
  );
}
