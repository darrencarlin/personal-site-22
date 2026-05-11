import { ListItem } from "@/components/list-item";
import { SectionTitle } from "./section-title";

interface EducationItem {
  date?: string | null;
  position?: string | null;
  college?: string | null;
  collegeUrl?: string | null;
}

interface Props {
  items: EducationItem[];
}

export const EducationSection = ({ items }: Props) => {
  if (!items?.length) return null;
  return (
    <>
      <SectionTitle title="Education" />
      <ul className="mb-6">
        {items.map((item, i) => (
          <ListItem
            key={`${item.college}-${item.date}-${i}`}
            date={item.date ?? ""}
            position={item.position ?? ""}
            college={item.college ?? undefined}
            collegeUrl={item.collegeUrl ?? undefined}
          />
        ))}
      </ul>
    </>
  );
};
