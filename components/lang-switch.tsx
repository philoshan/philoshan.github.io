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
      className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
      hrefLang={other}
    >
      {other === "ko" ? "KO" : "EN"}
    </Link>
  );
}
