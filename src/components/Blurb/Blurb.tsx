import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Navigation from "components/Navigation";
import Wrapper from "components/Wrapper";
import { BlurbProps } from "types/components";
import {
  Avatar,
  AvatarWrapper,
  BlurbContainer,
  BlurbWrapper,
  Content,
  Text,
} from "./style";

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
      <Wrapper maxWidth={1000}>
        <BlurbWrapper>
          <Content>{documentToReactComponents(json, options)}</Content>
          <AvatarWrapper>
            <Avatar
              src={blurb.image.url}
              width={200}
              height={200}
              objectFit="cover"
            />
          </AvatarWrapper>
        </BlurbWrapper>
      </Wrapper>
    </BlurbContainer>
  );
};

export default Blurb;
