import { BsGithub, BsLink } from "react-icons/bs";

const projects = [
  {
    name: "The Guinness Map",
    description:
      "User-generated map of the best (and worst) pints of Guinness around the world.",
    url: "https://theguinnessmap.com/",
    githubUrl: "",
  },
  {
    name: "Subscription Websites Ireland",
    description: "Website design and development on a subscription basis",
    url: "https://subscriptionwebsites.ie/",
    githubUrl: "",
  },
  {
    name: "Workout Tracker",
    description: "Strength training workout tracker",
    url: "https://ifyouaintshakingyouaintbaking.vercel.app/",
    githubUrl: "https://github.com/darrencarlin/exercise-tracker",
  },
  {
    name: "Discord Bot",
    description: "Discord bot for tracking server members wordle scores",
    url: "https://www.wordlediscordbot.com/",
    githubUrl: "https://github.com/darrencarlin/wordle-discord-bot",
  },
  {
    name: "Alpha Notes",
    description: "Note-taking app",
    url: "https://alpha-notes.vercel.app/",
    githubUrl: "https://github.com/darrencarlin/notes-app",
  },
];

export const ProjectSection = () => {
  return (
    <ul className="mb-6">
      <li className="mb-2">
        <h2 className="text-2xl font-medium">Projects</h2>
      </li>
      {projects.map((item, index) => (
        <li key={index} className="flex gap-4 mb-2">
          - {item.description}
          <div className="flex gap-2">
            {item.url && (
              <a href={item.url} target="_blank" rel="noreferrer">
                <BsLink
                  size="1.6em"
                  className="text-blue-800 dark:text-blue-500"
                />
              </a>
            )}
            {item.githubUrl && (
              <a href={item.githubUrl} target="_blank" rel="noreferrer">
                <BsGithub
                  size="1.6em"
                  className="text-blue-800 dark:text-blue-500"
                />
              </a>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};
