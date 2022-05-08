import Navigation from "components/Navigation";
import Wrapper from "components/Wrapper";
import { WorkItemProps, WorkProps } from "types/components";
import { WorkContainer, WorkItems } from "./style";
import WorkItem from "./WorkItem";

const Work = ({ work }: WorkProps) => {
  return (
    <WorkContainer>
      <Wrapper maxWidth={800}>
        <WorkItems>
          {work.map((item: WorkItemProps, index: number) => (
            <WorkItem {...item} key={index} />
          ))}
        </WorkItems>
        <Navigation />
      </Wrapper>
    </WorkContainer>
  );
};

export default Work;
