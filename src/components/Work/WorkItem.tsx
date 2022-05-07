import { WorkItemProps } from "types/components";
import { Company, Date, Location, Title, WorkItemContainer } from "./style";

const WorkItem = ({ company, title, location, date }: WorkItemProps) => {
  return (
    <WorkItemContainer>
      <Company>{company}</Company>
      <Title>{title}</Title>
      <Location>{location}</Location>
      <Date>{date}</Date>
    </WorkItemContainer>
  );
};

export default WorkItem;
