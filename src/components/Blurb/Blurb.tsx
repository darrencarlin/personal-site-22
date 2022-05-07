import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Wrapper from "components/Wrapper";
import { BlurbProps } from "types/components";
import { BlurbContainer, Text } from "./style";

const Blurb = ({ blurb }: BlurbProps) => {
  const {
    text: { json },
  } = blurb;

  const renderOptions = () => {
    return {
      renderNode: {
        [BLOCKS.PARAGRAPH]: (node: any, children: any) => {
          return <Text>{children}</Text>;
        },
      },
    };
  };

  const options = renderOptions();
  return (
    <BlurbContainer>
      <Wrapper maxWidth={1200}>
        {documentToReactComponents(json, options)}
      </Wrapper>
    </BlurbContainer>
  );
};

export default Blurb;
