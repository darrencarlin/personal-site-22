import { getPostSlugs } from "@/sanity/lib/fetch";
import { SITE_URL } from "@/utils/constants";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPostSlugs();

  const routes = posts.map(({ slug, publishedAt }) => ({
    url: `${SITE_URL}/post/${slug?.current}`,
    lastModified: publishedAt,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 1,
    },
    ...routes,
  ];
}
