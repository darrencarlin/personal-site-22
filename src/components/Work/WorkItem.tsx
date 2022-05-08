import { WorkItemProps } from "types/components";
import {
  Bottom,
  Company,
  Date,
  Location,
  Title,
  Top,
  WorkItemContainer,
} from "./style";

const WorkItem = ({ company, title, location, date }: WorkItemProps) => {
  return (
    <WorkItemContainer>
      <Top>
        <Company>{company}</Company> <Date>{date}</Date>
      </Top>
      <Bottom>
        <Title>{title}</Title>
        <Location>{location}</Location>
      </Bottom>
    </WorkItemContainer>
  );
};

export default WorkItem;
