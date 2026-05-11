import { Post, PostWithExpandedAuthor } from "@/sanity.types";
import type { PortableTextBlock } from "next-sanity";
import { QueryParams } from "sanity";

export interface SanityImageRef {
  asset?: { _ref: string; _type: "reference" };
  alt?: string | null;
}

export interface SeoFields {
  metaTitle?: string | null;
  metaDescription?: string | null;
  keywords?: string[] | null;
  ogImage?: SanityImageRef | null;
  noIndex?: boolean | null;
  canonicalUrl?: string | null;
}

export type PostWithSeo = PostWithExpandedAuthor & {
  seo?: SeoFields | null;
};
import {
  getNextPostQuery,
  getPostSlugsQuery,
  getPrevPostQuery,
  homePageQuery,
  postBySlugQuery,
  postQuery,
  postsListQuery,
} from "../queries";
import { client } from "./client";

export interface HomePageData {
  intro?: PortableTextBlock[] | null;
  avatar?: SanityImageRef | null;
  twitterHandle?: string | null;
  seo?: SeoFields | null;
  work?: Array<{
    date?: string | null;
    position?: string | null;
    company?: string | null;
    companyUrl?: string | null;
  }> | null;
  education?: Array<{
    date?: string | null;
    position?: string | null;
    college?: string | null;
    collegeUrl?: string | null;
  }> | null;
  projects?: Array<{
    name?: string | null;
    description?: string | null;
    url?: string | null;
    githubUrl?: string | null;
    ariaLabel?: string | null;
  }> | null;
  socials?: Array<{
    platform?: string | null;
    href?: string | null;
  }> | null;
}

export async function sanityFetch<QueryResponse>({
  query,
  qParams,
  tags,
}: {
  query: string;
  qParams: QueryParams;
  tags: string[];
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, qParams, {
    cache: "force-cache",
    next: { tags },
  });
}

export const getHomePage = async () => {
  return sanityFetch<HomePageData | null>({
    query: homePageQuery,
    qParams: {},
    tags: ["homePage"],
  });
};

export const getPostsListData = async () => {
  return sanityFetch<Post[]>({
    query: postsListQuery,
    qParams: {},
    tags: ["post", "author", "category"],
  });
};

export const getPostBySlug = async (slug: string) => {
  return sanityFetch<PostWithSeo>({
    query: postBySlugQuery,
    qParams: { slug },
    tags: ["post", "author", "category"],
  });
};

export const getNextPost = async (publishedAt: string, id: string) => {
  return sanityFetch<Post>({
    query: getNextPostQuery,
    qParams: { publishedAt, id },
    tags: ["post", "author", "category"],
  });
};

export const getPrevPost = async (publishedAt: string, id: string) => {
  return sanityFetch<Post>({
    query: getPrevPostQuery,
    qParams: { publishedAt, id },
    tags: ["post", "author", "category"],
  });
};

export const getPostSlugs = async () => {
  return sanityFetch<Post[]>({
    query: getPostSlugsQuery,
    qParams: {},
    tags: ["post"],
  });
};
