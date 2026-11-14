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
  const name = getDisplayName(locale);
  return (
    <section className="pt-12 sm:pt-20">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-center">
        {/* eslint-disable-next-line @next/next/no-img-element -- 정적 export라 next/image 최적화 미사용 */}
        <img
          src={resolveHref(siteConfig.profileImage)}
          alt={name}
          width={600}
          height={676}
          className="h-auto w-48 shrink-0"
        />
        <div>
          <h1 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">{name}</h1>
          <p className="mt-3 leading-relaxed text-neutral-600 dark:text-neutral-400">{getIntro(locale)}</p>
          <ul className="mt-6 space-y-2 text-neutral-900 dark:text-neutral-100">
            <li>
              <a href={resolveHref(siteConfig.cvUrl)} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {t.ctaCv}
              </a>
              <span className="ml-1 text-neutral-400">↗</span>
            </li>
            {siteConfig.portfolioUrl ? (
              <li>
                <a href={resolveHref(siteConfig.portfolioUrl)} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {t.ctaPortfolio}
                </a>
                <span className="ml-1 text-neutral-400">↗</span>
              </li>
            ) : null}
          </ul>
        </div>
      </div>

      <p className="mt-12 text-sm text-neutral-500 dark:text-neutral-400">
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
