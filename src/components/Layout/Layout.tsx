import Navigation from "components/Navigation";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};

export default Layout;
