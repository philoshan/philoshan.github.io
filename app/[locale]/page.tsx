import type { Locale } from "@/lib/locales";
import { HeroSection } from "@/components/hero-section";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site";

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  return pageMetadata({
    title: siteConfig.siteTitle,
    description: siteConfig.defaultDescription,
    path: `/${params.locale}`,
  });
}

export default function HomePage({ params }: { params: { locale: Locale } }) {
  return <HeroSection locale={params.locale} />;
}
