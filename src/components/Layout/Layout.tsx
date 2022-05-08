import Navigation from "components/Navigation";
import { LayoutContainer } from "./style";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export default Layout;
