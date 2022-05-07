import Link from "next/link";
import { FirstName, LastName, Links, Name, Nav } from "./style";

const Navigation = () => {
  return (
    <Nav>
      <Name>
        <Link href="/" passHref>
          <a>
            <FirstName>Darren</FirstName>
            <LastName>Carlin</LastName>
          </a>
        </Link>
      </Name>
      <Links>
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <Link href="/contact" passHref>
          <a>Contact</a>
        </Link>
        <Link href="/blog" passHref>
          <a>Blog</a>
        </Link>
      </Links>
    </Nav>
  );
};

export default Navigation;
