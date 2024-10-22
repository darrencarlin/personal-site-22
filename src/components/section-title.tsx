interface Props {
  title: string | undefined;
}

export const SectionTitle = ({ title }: Props) => {
  return <h2 className="mb-4 text-2xl font-medium">{title}</h2>;
};
