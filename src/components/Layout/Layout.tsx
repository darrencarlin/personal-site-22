import Footer from "components/Footer";
import Navigation from "components/Navigation";
import { LayoutContainer } from "./style";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutContainer>
      <Navigation />
      {children}
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
