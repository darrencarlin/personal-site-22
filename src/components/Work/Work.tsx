import Section from "components/Section";
import SectionTitle from "components/SectionTitle";
import Wrapper from "components/Wrapper";
import { WorkItemProps, WorkProps } from "types/components";
import { WorkItems } from "./style";
import WorkItem from "./WorkItem";

const Work = ({ work }: WorkProps) => {
  return (
    <Section id="work" backgroundColor="#f9f9f9">
      <Wrapper maxWidth={900}>
        <SectionTitle title="Work" />
        <WorkItems>
          {work.map((item: WorkItemProps, index: number) => (
            <WorkItem {...item} key={index} />
          ))}
        </WorkItems>
      </Wrapper>
    </Section>
  );
};

export default Work;
