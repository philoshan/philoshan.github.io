import Link from "next/link";
import type { Locale } from "@/lib/locales";
import { getUi } from "@/lib/i18n";
import { getDisplayName, siteConfig } from "@/data/site";

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = getUi(locale).footer;
  return (
    <footer className="mt-24 border-t border-slate-200 py-10 dark:border-slate-800">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 text-sm text-slate-500 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          © {new Date().getFullYear()} {getDisplayName(locale)} · {siteConfig.name}. {t.rights}
        </p>
        <div className="flex gap-4">
          <Link className="hover:text-indigo-600 dark:hover:text-indigo-400" href={siteConfig.githubUrl}>
            GitHub
          </Link>
          <Link className="hover:text-indigo-600 dark:hover:text-indigo-400" href={`mailto:${siteConfig.email}`}>
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}
