import { SectionContainer } from "./style";

interface SectionProps {
  children: React.ReactNode;
  backgroundColor?: string;
  id?: string;
}

const Section = ({ id, backgroundColor, children }: SectionProps) => {
  return (
    <SectionContainer id={id} backgroundColor={backgroundColor}>
      {children}
    </SectionContainer>
  );
};

export default Section;
