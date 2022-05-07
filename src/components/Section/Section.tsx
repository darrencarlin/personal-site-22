import { SectionContainer } from "./style";

interface SectionProps {
  children: React.ReactNode;
  backgroundColor?: string;
  color?: string;
  id?: string;
}

const Section = ({ id, children, backgroundColor, color }: SectionProps) => {
  return (
    <SectionContainer id={id} backgroundColor={backgroundColor} color={color}>
      {children}
    </SectionContainer>
  );
};

export default Section;
