import Link from "next/link";

interface Props {
  href: string;
  name: string;
}

export const SocialLink = ({ href, name }: Props) => (
  <Link
    href={href}
    target="_blank"
    rel="noreferrer"
    style={{ textDecoration: "none" }}
    className="text-blue-800 dark:text-blue-500 hover:underline"
  >
    {name}
  </Link>
);
