import type { PortableTextBlock } from "next-sanity";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import avatarFallback from "../../public/me.webp";
import { urlFor } from "@/sanity/lib/image";

interface SanityImage {
  asset?: { _ref: string; _type: "reference" };
  alt?: string | null;
}

interface Props {
  intro?: PortableTextBlock[] | null;
  avatar?: SanityImage | null;
}

const blurbComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mt-4 first:mt-0">{children}</p>,
    h2: ({ children }) => (
      <p className="text-3xl md:text-4xl font-display">{children}</p>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noreferrer"
        className="underline text-blue-custom-dark"
      >
        {children}
      </a>
    ),
  },
};

export const BlurbSection = ({ intro, avatar }: Props) => {
  const avatarSrc = avatar?.asset?._ref
    ? urlFor(avatar).width(660).url()
    : null;
  const avatarAlt = avatar?.alt ?? "Darren Carlin headshot";

  return (
    <div className="grid grid-cols-1 gap-y-8 md:grid-cols-[1.5fr_1fr] md:gap-x-24 md:gap-y-12 lg:grid-cols-[2fr_1fr] mb-8">
      <div>
        {intro ? (
          <PortableText value={intro} components={blurbComponents} />
        ) : null}
      </div>

      <div className="mb-4">
        {avatarSrc ? (
          <Image
            src={avatarSrc}
            alt={avatarAlt}
            width={660}
            height={700}
            className="object-cover rounded-lg max-h-[350px] max-w-full md:max-h-[350px] md:max-w-[330px]"
          />
        ) : (
          <Image
            src={avatarFallback}
            alt={avatarAlt}
            placeholder="blur"
            className="object-cover rounded-lg max-h-[350px] max-w-full md:max-h-[350px] md:max-w-[330px]"
          />
        )}
      </div>
    </div>
  );
};
