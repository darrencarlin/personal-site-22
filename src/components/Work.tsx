import { WorkProps, WorkItemProps } from "types/components";

import WorkItem from "./WorkItem";

const Work = ({ work }: WorkProps) => {
  return (
    <div>
      <h2>Work</h2>
      <div>
        {work.map((item: WorkItemProps, index: number) => (
          <WorkItem {...item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Work;
