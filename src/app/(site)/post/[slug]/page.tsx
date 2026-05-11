import { PostNavigation } from "@/components/post-navigation";
import { components } from "@/sanity/components";
import { getHomePage, getPostBySlug, getPostSlugs } from "@/sanity/lib/fetch";
import { buildMetadata } from "@/lib/seo";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";

import type { Metadata } from "next";
import { HeadingOne } from "@/components/portable-text/headings";

export async function generateStaticParams() {
  const posts = await getPostSlugs();
  return posts.flatMap((post) =>
    post.slug?.current ? [{ slug: post.slug.current }] : [],
  );
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata(props: {
  params: Params;
}): Promise<Metadata> {
  const params = await props.params;
  const [post, home] = await Promise.all([
    getPostBySlug(params.slug),
    getHomePage(),
  ]);

  if (!post) return {};

  return buildMetadata({
    seo: post.seo,
    defaults: home?.seo,
    twitterHandle: home?.twitterHandle,
    fallbackTitle: post.title ?? "Post",
    fallbackDescription: post.excerpt,
    fallbackKeywords: post.keywords,
    path: `post/${params.slug}`,
    ogType: "article",
    publishedTime: post.publishedAt ?? post._createdAt,
    authors: post.author?.name ? [post.author.name] : undefined,
  });
}

export default async function Page(props: { params: Params }) {
  const params = await props.params;
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const { _id, title, _createdAt, publishedAt, body } = post;

  return (
    <article className="max-w-3xl p-4 mx-auto mb-32 prose-lg prose-invert">
      <HeadingOne>{title}</HeadingOne>
      <div>
        <PortableText value={body || []} components={components} />
      </div>
      {/* Published Date */}
      <time className="block mt-4 text-gray-200" dateTime={_createdAt}>
        <span className="font-semibold text-gray-200">Published at: </span>
        {new Date(_createdAt).toLocaleString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </time>

      <hr className="my-8" />
      {publishedAt ? (
        <PostNavigation publishedAt={publishedAt} id={_id} />
      ) : null}
    </article>
  );
}
