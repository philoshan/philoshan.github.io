"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import type { Locale } from "@/lib/locales";

function localeFromPath(pathname: string | null): Locale {
  if (!pathname) return "ko";
  const seg = pathname.split("/")[1];
  return seg === "en" ? "en" : "ko";
}

export function LocaleHtml() {
  const pathname = usePathname();
  useEffect(() => {
    document.documentElement.lang = localeFromPath(pathname);
  }, [pathname]);
  return null;
}
