import { EducationProps, EducationItemProps } from "types/components";
import EducationItem from "./EducationItem";

const Education = ({ education }: EducationProps) => {
  return (
    <div>
      <h2>Education</h2>
      <div>
        {education.map((item: EducationItemProps, index: number) => (
          <EducationItem {...item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Education;
