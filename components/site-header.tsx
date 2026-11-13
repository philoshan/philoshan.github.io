import Link from "next/link";
import type { Locale } from "@/lib/locales";
import { withLocale } from "@/lib/paths";
import { siteConfig } from "@/data/site";
import { ThemeToggle } from "@/components/theme-toggle";
import { LangSwitch } from "@/components/lang-switch";
import { cn } from "@/lib/utils";

export function SiteHeader({ locale }: { locale: Locale }) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/80">
      <div className="mx-auto flex min-h-[4.25rem] max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href={withLocale(locale, "/")}
          className={cn(
            "font-brand text-xl font-semibold tracking-tight text-slate-900 transition-colors sm:text-2xl md:text-3xl",
            "hover:text-indigo-600 dark:text-slate-50 dark:hover:text-indigo-400",
          )}
        >
          {siteConfig.name}
        </Link>
        <div className="flex items-center gap-2">
          <LangSwitch locale={locale} />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
