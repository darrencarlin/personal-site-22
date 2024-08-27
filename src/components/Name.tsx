import Link from "next/link";

interface NameProps {
  href: string;
  name: string;
}

export const Name = ({ href, name }: NameProps) => (
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
