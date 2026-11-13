import type { Locale } from "@/lib/locales";
import { getDisplayName } from "@/data/site";

export function SiteFooter({ locale }: { locale: Locale }) {
  return (
    <footer className="py-10 text-xs text-neutral-400 dark:text-neutral-500">
      © {new Date().getFullYear()} {getDisplayName(locale)}
    </footer>
  );
}
