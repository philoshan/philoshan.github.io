import Link from "next/link";
import type { Locale } from "@/lib/locales";
import { withLocale } from "@/lib/paths";
import { siteConfig } from "@/data/site";
import { ThemeToggle } from "@/components/theme-toggle";
import { LangSwitch } from "@/components/lang-switch";

export function SiteHeader({ locale }: { locale: Locale }) {
  return (
    <header className="flex items-center justify-between py-8 text-sm text-neutral-500 dark:text-neutral-400">
      <Link href={withLocale(locale, "/")} className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-100">
        {siteConfig.name}
      </Link>
      <div className="flex items-center gap-4">
        <LangSwitch locale={locale} />
        <ThemeToggle />
      </div>
    </header>
  );
}
