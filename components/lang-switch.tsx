"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/locales";
import { withLocale } from "@/lib/paths";

export function LangSwitch({ locale }: { locale: Locale }) {
  const pathname = usePathname() || "/";
  const other: Locale = locale === "ko" ? "en" : "ko";
  const rest = pathname.replace(/^\/(ko|en)(?=\/|$)/, "") || "/";
  const normalized = rest.startsWith("/") ? rest : `/${rest}`;
  const href = withLocale(other, normalized);

  return (
    <Link
      href={href}
      className="rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-medium text-slate-600 transition hover:border-indigo-300 hover:text-indigo-700 dark:border-slate-800 dark:text-slate-300 dark:hover:border-indigo-500/40 dark:hover:text-indigo-300"
      hrefLang={other}
    >
      {other === "ko" ? "KO" : "EN"}
    </Link>
  );
}
