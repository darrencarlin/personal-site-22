import { PostNavigation } from "@/components/post-navigation";
import { components } from "@/sanity/components";
import { getPostBySlug } from "@/sanity/lib/fetch";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";

import type { Metadata } from "next";

type Params = Promise<{ slug: string }>;

export async function generateMetadata(props: {
  params: Params;
}): Promise<Metadata> {
  const params = await props.params;
  const post = await getPostBySlug(params.slug);
  const { title, excerpt, author, keywords } = post;
  return {
    title: title,
    description: excerpt,
    authors: [{ name: author?.name }],
    keywords: keywords,
    openGraph: {
      title: title,
      description: excerpt,
      type: "article",
      url: `https://darrencarlin.com/post/${params.slug}`,
      locale: "en_US",
      tags: keywords,
      publishedTime: post._createdAt,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: false,
      },
    },
  };
}

export default async function Page(props: { params: Params }) {
  const params = await props.params;
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const { title, _createdAt, body } = post;

  return (
    <article className="max-w-5xl p-4 mx-auto mb-32 prose-lg prose-invert">
      <h1 className="mb-8 text-5xl font-medium">{title}</h1>
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
      <PostNavigation createdAt={_createdAt} />
    </article>
  );
}
