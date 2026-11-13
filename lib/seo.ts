import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

function baseUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
}

export function pageMetadata(opts: {
  title: string;
  description: string;
  /** Absolute path including locale, e.g. /ko/blog */
  path: string;
}): Metadata {
  const url = `${baseUrl().replace(/\/$/, "")}${opts.path}`;
  return {
    title: opts.title,
    description: opts.description,
    openGraph: {
      title: `${opts.title} · ${siteConfig.siteTitle}`,
      description: opts.description,
      url,
      siteName: siteConfig.siteTitle,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
    },
  };
}
