import Name from "../Name";
import { ListTitle } from "../_shared/style";
import { ProjectsList } from "./style";

const ProjectSection = () => {
  return (
    <ProjectsList>
      <ListTitle>Projects</ListTitle>
      <li>
        - Freelance web development / design company:{" "}
        <Name href="https://www.dazzleworks.ie" name="dazzleworks" />
      </li>
      <li>
        - Tarkov Hideout, a video game progress tracker:{" "}
        <Name href="https://www.tarkov-hideout.com" name="Tarkov Hideout" />
      </li>
      <li>
        - Strength training workout tracker:{" "}
        <Name
          href="https://ifyouaintshakingyouaintbaking.netlify.app/"
          name="Workout Tracker"
        />
      </li>
    </ProjectsList>
  );
};

export default ProjectSection;
