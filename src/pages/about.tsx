import About from "components/About";
import { GetStaticProps } from "next";
import React from "react";
import { AboutItemProps } from "types/components";
import { getAbout } from "utils/contentful";

export interface AboutPageProps {
  about: AboutItemProps;
}
const AboutPage = ({ about }: AboutPageProps) => {
  return <About about={about} />;
};

export default AboutPage;

export const getStaticProps: GetStaticProps = async () => {
  const about = await getAbout();

  return { props: { about } };
};
