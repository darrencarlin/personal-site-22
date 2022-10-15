import { HeaderSection, Title } from "./style";
import dynamic from "next/dynamic";
import Link from "next/link";

const ThemeToggle = dynamic(() => import("../ThemeToggle"), {
  ssr: false,
}) as any;

const Header = () => {
  return (
    <HeaderSection>
      {/* <Link href="/">
        <a>
          <Title>
            <span>Darren</span> <span>Carlin</span>
          </Title>
        </a>
      </Link> */}
      <ThemeToggle />
    </HeaderSection>
  );
};

export default Header;
