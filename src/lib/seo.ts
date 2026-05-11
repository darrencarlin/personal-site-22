import type { Metadata } from "next";
import { urlFor } from "@/sanity/lib/image";
import type { SanityImageRef, SeoFields } from "@/sanity/lib/fetch";
import { SITE_NAME, SITE_URL } from "@/utils/constants";

const DEFAULT_DESCRIPTION =
  "Hi, I'm Darren Carlin, a Front-End Engineer based in NYC, specializing in React and TypeScript.";

const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

interface BuildMetadataInput {
  /** SEO overrides from the CMS (post-level) */
  seo?: SeoFields | null;
  /** Site-wide defaults from the homePage singleton */
  defaults?: SeoFields | null;
  /** Twitter / X handle for Twitter Card */
  twitterHandle?: string | null;
  /** Used as the title when no SEO meta-title is set */
  fallbackTitle: string;
  /** Used as the description when no SEO meta-description and no excerpt */
  fallbackDescription?: string | null;
  /** Used as keywords when SEO keywords aren't set */
  fallbackKeywords?: string[] | null;
  /** Path of the current route (without leading slash). e.g. "post/foo" */
  path?: string;
  /** "article" for posts, "website" otherwise */
  ogType?: "website" | "article";
  /** Article-only OG fields */
  publishedTime?: string;
  authors?: string[];
}

const ogImageFromRef = (image?: SanityImageRef | null) => {
  if (!image?.asset?._ref) return null;
  return {
    url: urlFor(image).width(OG_WIDTH).height(OG_HEIGHT).fit("crop").url(),
    width: OG_WIDTH,
    height: OG_HEIGHT,
    alt: image.alt ?? undefined,
  };
};

export const buildMetadata = ({
  seo,
  defaults,
  twitterHandle,
  fallbackTitle,
  fallbackDescription,
  fallbackKeywords,
  path = "",
  ogType = "website",
  publishedTime,
  authors,
}: BuildMetadataInput): Metadata => {
  const title = seo?.metaTitle || fallbackTitle;
  const description =
    seo?.metaDescription ||
    fallbackDescription ||
    defaults?.metaDescription ||
    DEFAULT_DESCRIPTION;
  const keywords = seo?.keywords?.length
    ? seo.keywords
    : (fallbackKeywords ?? defaults?.keywords ?? undefined);
  const noIndex = seo?.noIndex ?? defaults?.noIndex ?? false;

  const og = ogImageFromRef(seo?.ogImage) ?? ogImageFromRef(defaults?.ogImage);
  const url = `${SITE_URL}${path ? `/${path}` : ""}`;
  const canonical = seo?.canonicalUrl || url;

  const openGraph: Metadata["openGraph"] =
    ogType === "article"
      ? {
          type: "article",
          title,
          description,
          url,
          siteName: SITE_NAME,
          locale: "en_US",
          images: og ? [og] : undefined,
          publishedTime,
          authors,
        }
      : {
          type: "website",
          title,
          description,
          url,
          siteName: SITE_NAME,
          locale: "en_US",
          images: og ? [og] : undefined,
        };

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords,
    authors: authors?.length ? authors.map((name) => ({ name })) : undefined,
    alternates: { canonical },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          googleBot: { index: false, follow: false },
        }
      : {
          index: true,
          follow: true,
          googleBot: { index: true, follow: false },
        },
    openGraph,
    twitter: {
      card: og ? "summary_large_image" : "summary",
      title,
      description,
      images: og ? [og.url] : undefined,
      creator: twitterHandle ?? undefined,
      site: twitterHandle ?? undefined,
    },
  };
};
