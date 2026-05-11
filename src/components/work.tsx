import { ListItem } from "@/components/list-item";
import { SectionTitle } from "./section-title";

interface WorkItem {
  date?: string | null;
  position?: string | null;
  company?: string | null;
  companyUrl?: string | null;
}

interface Props {
  items: WorkItem[];
}

export const WorkSection = ({ items }: Props) => {
  if (!items?.length) return null;
  return (
    <>
      <SectionTitle title="Work" />
      <ul className="mb-6">
        {items.map((item, i) => (
          <ListItem
            key={`${item.company}-${item.date}-${i}`}
            date={item.date ?? ""}
            position={item.position ?? ""}
            company={item.company ?? undefined}
            companyUrl={item.companyUrl ?? undefined}
          />
        ))}
      </ul>
    </>
  );
};
