import Name from "../Name";
import { ListTitle } from "../_shared/style";
import { Job, Slash, StyledListItem, WorkList } from "./style";

const work = [
   {
    date: "2023 - Present",
    position: "Full Stack Engineer",
    company: "Fragment Media Group",
    companyUrl: "https://fragmnt.com/",
  },
    {
    date: "2023 - Present",
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

interface ListItemProps {
  date: string;
  position: string;
  company: string;
  companyUrl: string;
}

const ListItem = ({ date, position, company, companyUrl }: ListItemProps) => (
  <StyledListItem>
    <b>{date}</b>{" "}
    <Job>
      {" "}
      <Slash>&nbsp;/&nbsp;</Slash> {position} @&nbsp;
      <Name href={companyUrl} name={company} />
    </Job>
  </StyledListItem>
);

const WorkSection = () => {
  return (
    <WorkList>
      <li>
        <ListTitle>Work</ListTitle>
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
    </WorkList>
  );
};

export default WorkSection;
