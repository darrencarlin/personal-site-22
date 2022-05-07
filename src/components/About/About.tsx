/* eslint-disable @next/next/no-img-element */
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Section from "components/Section";
import Wrapper from "components/Wrapper";
import React from "react";
import { AboutProps } from "types/components";
import { Avatar } from "./style";

const About = ({ about }: AboutProps) => {
  const {
    title,
    body: { json },
    image: { description, url },
  } = about;

  const renderOptions = () => {
    return {
      renderNode: {
        [BLOCKS.PARAGRAPH]: (node: any, children: any) => {
          return <p>{children}</p>;
        },
      },
    };
  };

  const options = renderOptions();

  return (
    <Section>
      <Wrapper maxWidth={800}>
        {documentToReactComponents(json, options)}
        <Avatar src={url} alt={description} loading="lazy" decoding="async" />
      </Wrapper>
    </Section>
  );
};

export default About;
