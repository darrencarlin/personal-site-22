import Work from "components/Work";
import { GetStaticProps } from "next";
import React from "react";
import { WorkItemProps } from "types/components";
import { getWork } from "utils/contentful";

export interface WorkPageProps {
  work: WorkItemProps[];
}

const WorkPage = ({ work }: WorkPageProps) => {
  return <Work work={work} />;
};

export default WorkPage;

export const getStaticProps: GetStaticProps = async () => {
  const work = await getWork();

  return { props: { work } };
};
