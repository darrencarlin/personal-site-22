import { EducationItemProps } from "types/components";
import {
  Bottom,
  College,
  Course,
  Date,
  EducationItemContainer,
  Location,
  Top,
} from "./style";

const EducationItem = ({
  college,
  course,
  location,
  date,
}: EducationItemProps) => {
  return (
    <EducationItemContainer>
      <Top>
        <College>{college}</College> <Date>{date}</Date>
      </Top>
      <Bottom>
        <Course>{course}</Course> <Location>{location}</Location>
      </Bottom>
    </EducationItemContainer>
  );
};

export default EducationItem;
