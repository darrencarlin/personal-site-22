import React, { useEffect } from "react";
import Prism from "prismjs";
require("prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js");
require("prismjs/components/prism-javascript");
require("prismjs/components/prism-typescript");
require("prismjs/components/prism-css");
require("prismjs/components/prism-scss");
require("prismjs/components/prism-jsx");
require("prismjs/components/prism-tsx");
require("prismjs/components/prism-json");

interface CodeSnippetProps {
  language: string;
  code: string;
}

const CodeSnippet = ({ code, language }: CodeSnippetProps) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <pre>
      <code className={`language-${language}`}>{`${code}`}</code>
    </pre>
  );
};

export default CodeSnippet;
