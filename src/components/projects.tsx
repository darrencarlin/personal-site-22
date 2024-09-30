import { projects } from "@/utils/constants";
import { BsGithub, BsLink } from "react-icons/bs";
import { SectionTitle } from "./section-title";
import Link from "next/link";

export const ProjectSection = () => {
  return (
    <>
      <SectionTitle title="Projects" />
      <ul className="mb-6">
        {projects.map((item, index) => (
          <li
            key={index}
            className="flex flex-col gap-1 mb-2 md:gap-2 md:flex-row"
          >
            {item.url ? (
              <Link href={item.url} className="font-bold underline">
                {item.name}
              </Link>
            ) : (
              <span className="font-bold">{item.name}</span>
            )}
            <span className="hidden md:block">/</span> {item.description}
            <div>
              {item.githubUrl && (
                <a
                  href={item.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.ariaLabel}
                >
                  <BsGithub
                    size="1.6em"
                    className="text-blue-800 dark:text-blue-custom-dark"
                  />
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
