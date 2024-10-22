import { getPostSlugs } from "@/sanity/lib/fetch";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPostSlugs();

  const routes = posts.map(({ slug, publishedAt }) => ({
    url: `https://darrencarlin.com/post/${slug?.current}`,
    lastModified: publishedAt,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: "https://darrencarlin.com",
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 1,
    },
    ...routes,
  ];
}
