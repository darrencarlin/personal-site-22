import { ListItem } from "@/components/list-item";

const education = [
  {
    date: "2016 - 2017",
    position: "Higher Diploma Applied Computing Technology",
    college: "University College Cork",
    collegeUrl: "https://www.ucc.ie",
  },
  {
    date: "2013 - 2016",
    position: "Bachelors of Social Science",
    college: "University College Cork",
    collegeUrl: "https://www.ucc.ie",
  },
];

// interface ListItemProps {
//   date: string;
//   position: string;
//   college: string;
//   collegeUrl: string;
// }

// export const ListItem = ({
//   date,
//   position,
//   college,
//   collegeUrl,
// }: ListItemProps) => (
//   <li className="flex flex-col gap-1 mb-2 md:gap-2 md:flex-row">
//     <span className="font-bold">{date}</span>
//     <span className="hidden md:block">/</span>
//     <span>
//       {position} @ <Name href={collegeUrl} name={college} />
//     </span>
//   </li>
// );

export const EducationSection = () => {
  return (
    <ul className="mb-6">
      <li className="mb-2">
        <h2 className="text-2xl font-medium">Education</h2>
      </li>
      {education.map((item, index) => (
        <ListItem
          key={index}
          date={item.date}
          position={item.position}
          college={item.college}
          collegeUrl={item.collegeUrl}
        />
      ))}
    </ul>
  );
};
