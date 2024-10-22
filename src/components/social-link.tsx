import Link from "next/link";
import { PillLink } from "./pill-button";

interface Props {
  href: string;
  name: string;
  icon?: React.ReactNode;
}

export const SocialLink = ({ href, name, icon }: Props) => (
  <PillLink
    href={href}
    target="_blank"
    rel="noreferrer"
    style={{ textDecoration: "none" }}
    className="flex items-center gap-2 px-4 py-2 transition-all duration-300 border border-black rounded-full dark:border-neutral-800 dark:hover:border-neutral-600 hover:border-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-950 hover:-translate-y-1"
  >
    <span>{icon}</span>
    <span>{name}</span>
  </PillLink>
);
