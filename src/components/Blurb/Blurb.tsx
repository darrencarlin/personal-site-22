import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Navigation from "components/Navigation";
import Wrapper from "components/Wrapper";
import { BlurbProps } from "types/components";
import { BlurbContainer, Content, Text } from "./style";

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
      <Wrapper maxWidth={800}>
        <Navigation />
        <Content>{documentToReactComponents(json, options)}</Content>
      </Wrapper>
    </BlurbContainer>
  );
};

export default Blurb;
