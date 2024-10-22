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
import { PortableTextComponents } from "next-sanity";

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
  },
};
