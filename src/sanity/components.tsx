import { Code } from "@/components/portable-text/code";
import {
	HeadingFive,
	HeadingFour,
	HeadingOne,
	HeadingSix,
	HeadingThree,
	HeadingTwo,
} from "@/components/portable-text/headings";
import { Normal } from "@/components/portable-text/normal";
import type { PortableTextComponents } from "next-sanity";
import Image from "next/image";
import { urlFor } from "./lib/image";

interface SanityImage {
	_type: "image";
	asset: {
		_ref: string;
		_type: "reference";
	};
	alt?: string;
	caption?: string;
}

const ImageComponent = ({ value }: { value: SanityImage }) => {
	if (!value.asset._ref) {
		return null;
	}

	return (
		<figure className="my-8">
			<Image
				src={urlFor(value).url()}
				alt={value.alt || "Blog post image"}
				width={800}
				height={500}
				className="rounded-lg"
				// These styles wouldn't work as a classname
				style={{
					maxHeight: "95vh",
					objectFit: "contain",
				}}
				priority={false}
			/>
			{value.caption && (
				<figcaption className="mt-2 text-sm text-center text-gray-500">
					{value.caption}
				</figcaption>
			)}
		</figure>
	);
};

export const components: PortableTextComponents = {
	block: {
		normal: ({ children }) => {
			return <Normal>{children}</Normal>;
		},
		h1: ({ children }) => {
			return <HeadingOne>{children}</HeadingOne>;
		},
		h2: ({ children }) => {
			return <HeadingTwo>{children}</HeadingTwo>;
		},
		h3: ({ children }) => {
			return <HeadingThree>{children}</HeadingThree>;
		},
		h4: ({ children }) => {
			return <HeadingFour>{children}</HeadingFour>;
		},
		h5: ({ children }) => {
			return <HeadingFive>{children}</HeadingFive>;
		},
		h6: ({ children }) => {
			return <HeadingSix>{children}</HeadingSix>;
		},
	},
	marks: {
		strong: ({ children }) => {
			return <strong className="font-bold">{children}</strong>;
		},
		link: ({ children, value }) => {
			const isExternalLink = value.href.startsWith("http");
			return (
				<a
					href={value.href}
					target={isExternalLink ? "_blank" : ""}
					rel={isExternalLink ? "noopener noreferrer" : ""}
					className="text-blue-600 underline"
				>
					{children}
				</a>
			);
		},
	},
	types: {
		code: Code,
		image: ImageComponent,
	},
};
