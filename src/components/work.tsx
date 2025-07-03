import { ListItem } from "@/components/list-item";
import { work } from "@/utils/constants";
import { SectionTitle } from "./section-title";

export const WorkSection = () => {
	return (
		<>
			<SectionTitle title="Work" />
			<ul className="mb-6">
				{work.map((item) => (
					<ListItem
						key={item.id}
						date={item.date}
						position={item.position}
						company={item.company}
						companyUrl={item.companyUrl}
					/>
				))}
			</ul>
		</>
	);
};
