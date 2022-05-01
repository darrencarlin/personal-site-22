import { EducationItemProps } from "types/components";

const EducationItem = ({
  college,
  course,
  location,
  date,
}: EducationItemProps) => {
  return (
    <div>
      <h3>{college}</h3>
      <h4>{course}</h4>
      <h4>{location}</h4>
      <h4>{date}</h4>
    </div>
  );
};

export default EducationItem;
