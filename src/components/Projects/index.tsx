import { BsGithub, BsLink } from "react-icons/bs";
import Name from "../Name";
import { ListTitle } from "../_shared/style";
import { GithubLink, Links, ListItem, LiveLink, ProjectsList } from "./style";

const projects = [
  {
    name: "dazzleworks",
    description: "dazzleworks, Freelance Work",
    url: "https://www.dazzleworks.ie",
    githubUrl: "",
  },
  {
    name: "Tarkov Hideout",
    description: "Tarkov Hideout, a video game progress tracker",
    url: "https://www.tarkov-hideout.com",
    githubUrl: "https://github.com/darrencarlin/tarkov-hideout-new",
  },
  {
    name: "Workout Tracker",
    description: "Workout Tracker, Strength training workout tracker",
    url: "https://ifyouaintshakingyouaintbaking.vercel.app/",
    githubUrl: "https://github.com/darrencarlin/exercise-tracker",
  },
  {
    name: "Discord Bot",
    description:
      "Wordle Tracker, discord bot for tracking server members wordle scores",
    url: "https://www.wordlediscordbot.com/",
    githubUrl: "https://github.com/darrencarlin/wordle-discord-bot",
  },
  {
    name: "Alpha Notes",
    description: "Alpha Notes, note taking app",
    url: "https://alpha-notes.vercel.app/",
    githubUrl: "https://github.com/darrencarlin/notes-app",
  },
];

const ProjectSection = () => {
  return (
    <ProjectsList>
      <ListTitle>Projects</ListTitle>

      {projects.map((item, index) => (
        <ListItem key={index}>
          - {item.description}
          <Links>
            {item.url && (
              <LiveLink href={item.url} target="_blank" rel="noreferrer">
                <BsLink size="1.6em" />
              </LiveLink>
            )}
            {item.githubUrl && (
              <GithubLink href={item.githubUrl} target="_blank" rel="noreferrer">
                <BsGithub size="1.6em" />
              </GithubLink>
            )}
          </Links>
        </ListItem>
      ))}
    </ProjectsList>
  );
};

export default ProjectSection;
