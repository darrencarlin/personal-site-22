import { PostNavigation } from "@/components/post-navigation";
import { components } from "@/sanity/components";
import { getPostBySlug } from "@/sanity/lib/fetch";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";

import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
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

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const { title, _createdAt, body } = post;

  return (
    <section className="px-4 mb-32">
      <article className="mx-auto prose-lg dark:prose-invert max-w-[80ch]">
        <h1 className="mb-8 text-5xl font-medium">{title}</h1>
        <div>
          <PortableText value={body || []} components={components} />
        </div>
        <PostNavigation createdAt={_createdAt} />
      </article>
    </section>
  );
}
