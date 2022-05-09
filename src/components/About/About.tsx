/* eslint-disable @next/next/no-img-element */
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Navigation from "components/Navigation";
import Wrapper from "components/Wrapper";
import Image from "next/image";
import React from "react";
import { AboutProps } from "types/components";
import { AboutContainer, Avatar, ImageWrapper } from "./style";

const About = ({ about }: AboutProps) => {
  const {
    title,
    body: { json, links },
    image: { description, url },
  } = about;

  const renderOptions = (links: any) => {
    const assetMap = new Map();

    for (const asset of links.assets.block) {
      assetMap.set(asset.sys.id, asset);
    }

    return {
      renderNode: {
        [BLOCKS.PARAGRAPH]: (node: any, children: any) => {
          return <p>{children}</p>;
        },

        [BLOCKS.EMBEDDED_ASSET]: (node: any, next: any) => {
          const asset = assetMap.get(node.data.target.sys.id);

          return (
            <ImageWrapper>
              <Image
                layout="responsive"
                src={asset.url}
                alt="My image alt text"
                width={asset.width}
                height={asset.height}
              />
            </ImageWrapper>
          );
        },
      },
    };
  };

  const options = renderOptions(links);

  return (
    <AboutContainer>
      <Wrapper maxWidth={900}>
        {documentToReactComponents(json, options)}
      </Wrapper>
    </AboutContainer>
  );
};

export default About;
