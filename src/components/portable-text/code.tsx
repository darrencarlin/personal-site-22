import type { PortableTextTypeComponentProps } from "@portabletext/react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/hljs";

import type { Code as CodeBlock } from "@/sanity.types";

export const Code = ({ value }: PortableTextTypeComponentProps<CodeBlock>) => {
  if (!value.code) {
    return null;
  }

  return (
    <div className="my-5">
      <SyntaxHighlighter
        wrapLongLines
        language={value.language}
        style={nord}
        customStyle={{
          padding: "1rem",
          borderRadius: "0.5rem",
        }}
      >
        {value.code}
      </SyntaxHighlighter>
    </div>
  );
};
