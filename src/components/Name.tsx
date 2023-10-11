import Link from "next/link";
import { StyledLink } from "./_shared/style";

interface NameProps {
  href: string;
  name: string;
}

const Name = ({ href, name }: NameProps) => (
  <Link
    href={href}
    target="_blank"
    rel="noreferrer"
    style={{ textDecoration: "none" }}
  >
    {name}
  </Link>
);

export default Name;
