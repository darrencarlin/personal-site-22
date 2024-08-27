import { ListItem } from "@/components/list-item";

const work = [
  {
    date: "2024 - Present",
    position: "Front End Engineer",
    company: "Pine Creek Labs",
    companyUrl: "https://pinecreeklabs.com/",
  },
  {
    date: "2023 - 2024",
    position: "Full Stack Engineer",
    company: "Fragment Media",
    companyUrl: "https://fragmnt.com/",
  },
  {
    date: "2023 - 2023",
    position: "Senior Front End Engineer",
    company: "Barstool Sports",
    companyUrl: "https://barstoolsports.com/",
  },
  {
    date: "2021 - 2023",
    position: "Front End Engineer",
    company: "Morning Brew",
    companyUrl: "https://www.morningbrew.com/daily",
  },
  {
    date: "2019 - 2021",
    position: "Associate Software Engineer",
    company: "Insight",
    companyUrl: "https://www.insight.com/",
  },
  {
    date: "2018 - 2019",
    position: "Software Engineer Intern",
    company: "Insight",
    companyUrl: "https://www.insight.com/",
  },
  {
    date: "2017 - 2018",
    position: "Front End Developer",
    company: "Central Statistics Office",
    companyUrl: "https://www.cso.ie",
  },
];

export const WorkSection = () => {
  return (
    <ul className="mb-6">
      <li className="mb-4">
        <h2 className="text-2xl font-medium">Work</h2>
      </li>
      {work.map((item, index) => (
        <ListItem
          key={index}
          date={item.date}
          position={item.position}
          company={item.company}
          companyUrl={item.companyUrl}
        />
      ))}
    </ul>
  );
};
