import { SectionTitleContainer } from "./style";

interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return <SectionTitleContainer>{title}</SectionTitleContainer>;
};

export default SectionTitle;
