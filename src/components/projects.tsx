import { BsGithub } from "react-icons/bs";
import { SectionTitle } from "./section-title";

interface ProjectItem {
  name?: string | null;
  url?: string | null;
  description?: string | null;
  githubUrl?: string | null;
  ariaLabel?: string | null;
}

interface Props {
  items: ProjectItem[];
}

const ProjectListItem = ({
  name,
  url,
  description,
  githubUrl,
  ariaLabel,
}: ProjectItem) => (
  <li className="flex flex-col gap-1 mb-2 md:gap-2 md:flex-row">
    {url ? (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={url}
        aria-label={ariaLabel || `View ${name}`}
        className="font-medium underline"
      >
        {name}
      </a>
    ) : (
      <span className="font-bold">{name}</span>
    )}
    <span className="hidden md:block">/</span>
    <span>{description}</span>
    {githubUrl && (
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel || `View ${name} on GitHub`}
      >
        <BsGithub size={24} className="text-blue-custom-dark" />
      </a>
    )}
  </li>
);

export const ProjectSection = ({ items }: Props) => {
  if (!items?.length) return null;
  return (
    <section>
      <SectionTitle title="Projects" />
      <ul className="mb-6">
        {items.map((project, i) => (
          <ProjectListItem key={`${project.name}-${i}`} {...project} />
        ))}
      </ul>
    </section>
  );
};
