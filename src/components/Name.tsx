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
    className="dark:text-blue-500 text-blue-800 hover:underline"
  >
    {name}
  </Link>
);
