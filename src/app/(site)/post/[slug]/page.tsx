// import { PostNavigation } from "@/components/post-navigation";
// import { components } from "@/sanity/components";
// import { getPostBySlug } from "@/sanity/lib/fetch";
// import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";

// import type { Metadata } from "next";
// import { HeadingOne } from "@/components/portable-text/headings";

// type Params = Promise<{ slug: string }>;

// export async function generateMetadata(props: {
// 	params: Params;
// }): Promise<Metadata> {
// 	const params = await props.params;
// 	const post = await getPostBySlug(params.slug);
// 	const { title, excerpt, author, keywords } = post;
// 	return {
// 		title: title,
// 		description: excerpt,
// 		authors: [{ name: author?.name }],
// 		keywords: keywords,
// 		openGraph: {
// 			title: title,
// 			description: excerpt,
// 			type: "article",
// 			url: `https://darrencarlin.com/post/${params.slug}`,
// 			locale: "en_US",
// 			tags: keywords,
// 			publishedTime: post._createdAt,
// 		},
// 		robots: {
// 			index: true,
// 			follow: true,
// 			googleBot: {
// 				index: true,
// 				follow: false,
// 			},
// 		},
// 	};
// }

// type Params = Promise<{ slug: string }>;

export default async function Page(/* props: { params: Params } */) {
	notFound();
}
