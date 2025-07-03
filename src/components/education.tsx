import { ListItem } from "@/components/list-item";
import { education } from "@/utils/constants";
import { SectionTitle } from "./section-title";

export const EducationSection = () => {
	return (
		<>
			<SectionTitle title="Education" />
			<ul className="mb-6">
				{education.map((item) => (
					<ListItem
						key={item.id}
						date={item.date}
						position={item.position}
						college={item.college}
						collegeUrl={item.collegeUrl}
					/>
				))}
			</ul>
		</>
	);
};
