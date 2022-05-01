import { WorkItemProps } from "types/components";

const WorkItem = ({ company, title, location, date }: WorkItemProps) => {
  return (
    <div>
      <h3>{company}</h3>
      <h4>{title}</h4>
      <h4>{location}</h4>
      <h4>{date}</h4>
    </div>
  );
};

export default WorkItem;
