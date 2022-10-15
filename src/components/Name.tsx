import Link from "next/link";
import { StyledLink } from "./_shared/style";

interface NameProps {
  href: string;
  name: string;
}

const Name = ({ href, name }: NameProps) => (
  <Link href={href} passHref>
    <StyledLink target="_blank" rel="noreferrer">
      {name}
    </StyledLink>
  </Link>
);

export default Name;
