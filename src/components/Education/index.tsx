import Name from "../Name";
import { ListTitle } from "../_shared/style";
import { EducationList } from "./style";

const EducationSection = () => {
  return (
    <EducationList>
      <ListTitle>Education</ListTitle>
      <li>
        <b>2016 - 2017</b> / Higher Diploma Applied Computing Technology @{" "}
        <Name href="https://www.ucc.ie" name="University College Cork" />
      </li>
      <li>
        <b>2013 - 2016</b> / Bachelors of Social Science @{" "}
        <Name href="https://www.ucc.ie" name="University College Cork" />
      </li>
    </EducationList>
  );
};

export default EducationSection;
