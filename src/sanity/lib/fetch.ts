import { Post, PostWithExpandedAuthor } from "@/sanity.types";
import { QueryParams } from "sanity";
import {
  getNextPostQuery,
  getPostSlugsQuery,
  getPrevPostQuery,
  postBySlugQuery,
  postQuery,
  postsListQuery,
} from "../queries";
import { client } from "./client";

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

export const getPostsListData = async () => {
  return sanityFetch<Post[]>({
    query: postsListQuery,
    qParams: {},
    tags: ["post", "author", "category"],
  });
};

export const getPostBySlug = async (slug: string) => {
  return sanityFetch<PostWithExpandedAuthor>({
    query: postBySlugQuery,
    qParams: { slug },
    tags: ["post", "author", "category"],
  });
};

export const getNextPost = async (currentPostDate: string) => {
  return sanityFetch<Post>({
    query: getNextPostQuery,
    qParams: { currentPostDate },
    tags: ["post", "author", "category"],
  });
};

export const getPrevPost = async (currentPostDate: string) => {
  return sanityFetch<Post>({
    query: getPrevPostQuery,
    qParams: { currentPostDate },
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
