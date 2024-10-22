import SyntaxHighlighter from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export const Code = ({ value }: any) => {
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
