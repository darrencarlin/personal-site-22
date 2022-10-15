import dynamic from "next/dynamic";
import { HeaderSection } from "./style";

const ThemeToggle = dynamic(() => import("../ThemeToggle"), {
  ssr: false,
}) as any;

const Header = () => {
  return (
    <HeaderSection>
      <ThemeToggle />
    </HeaderSection>
  );
};

export default Header;
