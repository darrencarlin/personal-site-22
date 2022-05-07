import Section from "components/Section";
import SectionTitle from "components/SectionTitle";
import Wrapper from "components/Wrapper";
import { EducationItemProps, EducationProps } from "types/components";
import EducationItem from "./EducationItem";
import { EducationItems } from "./style";

const Education = ({ education }: EducationProps) => {
  return (
    <Section id="education" backgroundColor="#161618" color="#ffffff">
      <Wrapper maxWidth={800}>
        <SectionTitle title="Education" />
        <EducationItems>
          {education.map((item: EducationItemProps, index: number) => (
            <EducationItem {...item} key={index} />
          ))}
        </EducationItems>
      </Wrapper>
    </Section>
  );
};

export default Education;
