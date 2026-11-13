import type { Locale } from "@/lib/locales";
import { getUi } from "@/lib/i18n";
import { getDisplayName, getIntro, siteConfig } from "@/data/site";

/** public/ 안의 파일("/cv.pdf" 등)은 GitHub Pages basePath를 붙여야 함. 외부 URL은 그대로. */
function resolveHref(url: string) {
  return url.startsWith("/") ? `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${url}` : url;
}

const linkClass =
  "underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-neutral-900 dark:decoration-neutral-600 dark:hover:decoration-neutral-100";

export function HeroSection({ locale }: { locale: Locale }) {
  const t = getUi(locale).home;
  return (
    <section className="pt-12 sm:pt-20">
      <h1 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">{getDisplayName(locale)}</h1>
      <p className="mt-4 leading-relaxed text-neutral-600 dark:text-neutral-400">{getIntro(locale)}</p>

      <ul className="mt-10 space-y-2 text-neutral-900 dark:text-neutral-100">
        <li>
          <a href={resolveHref(siteConfig.cvUrl)} target="_blank" rel="noopener noreferrer" className={linkClass}>
            {t.ctaCv}
          </a>
          <span className="ml-1 text-neutral-400">↗</span>
        </li>
        <li>
          <a href={resolveHref(siteConfig.portfolioUrl)} target="_blank" rel="noopener noreferrer" className={linkClass}>
            {t.ctaPortfolio}
          </a>
          <span className="ml-1 text-neutral-400">↗</span>
        </li>
      </ul>

      <p className="mt-10 text-sm text-neutral-500 dark:text-neutral-400">
        <a href={siteConfig.githubUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
          GitHub
        </a>
        <span className="mx-2">·</span>
        <a href={`mailto:${siteConfig.email}`} className={linkClass}>
          {siteConfig.email}
        </a>
      </p>
    </section>
  );
}
