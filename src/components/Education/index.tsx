import Name from "../Name";
import { ListTitle } from "../_shared/style";
import { Education, EducationList, Slash, StyledListItem } from "./style";

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

interface ListItemProps {
  date: string;
  position: string;
  college: string;
  collegeUrl: string;
}

const ListItem = ({ date, position, college, collegeUrl }: ListItemProps) => (
  <StyledListItem>
    <b>{date}</b>{" "}
    <Education>
      {" "}
      <Slash>&nbsp;/&nbsp;</Slash> {position} @&nbsp;
      <Name href={collegeUrl} name={college} />
    </Education>
  </StyledListItem>
);

const EducationSection = () => {
  return (
    <EducationList>
      <ListTitle>Education</ListTitle>
      {education.map((item, index) => (
        <ListItem
          key={index}
          date={item.date}
          position={item.position}
          college={item.college}
          collegeUrl={item.collegeUrl}
        />
      ))}
    </EducationList>
  );
};

export default EducationSection;
