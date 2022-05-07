import { EducationItemProps } from "types/components";
import {
  College,
  Course,
  Date,
  EducationItemContainer,
  Location,
} from "./style";

const EducationItem = ({
  college,
  course,
  location,
  date,
}: EducationItemProps) => {
  return (
    <EducationItemContainer>
      <College>{college}</College>
      <Course>{course}</Course>
      <Location>{location}</Location>
      <Date>{date}</Date>
    </EducationItemContainer>
  );
};

export default EducationItem;
