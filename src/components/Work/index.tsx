import Name from "../Name";
import { ListTitle } from "../_shared/style";
import { WorkList } from "./style";

const WorkSection = () => {
  return (
    <WorkList>
      <li>
        <ListTitle>Work</ListTitle>
      </li>
      <li>
        <b>2021 - Present</b> / Front End Engineer @{" "}
        <Name href="https://www.morningbrew.com/daily" name="Morning Brew" />{" "}
      </li>
      <li>
        <b>2019 - 2021</b> / Associate Software Engineer @{" "}
        <Name href="https://www.insight.com/" name="Insight" />
      </li>
      <li>
        <b>2018 - 2019</b> / Software Engineer Intern @{" "}
        <Name href="https://www.insight.com/" name="Insight" />
      </li>
      <li>
        <b>2017 - 2018</b> / Front End Developer @{" "}
        <Name href="https://www.cso.ie" name="Central Statistics Office" />
      </li>
    </WorkList>
  );
};

export default WorkSection;
