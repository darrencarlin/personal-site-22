import { WrapperContainer } from "./style";

interface WrapperProps {
  children: React.ReactNode;
  maxWidth?: number;
}

const Wrapper = ({ children, maxWidth }: WrapperProps) => {
  return <WrapperContainer maxWidth={maxWidth}>{children}</WrapperContainer>;
};
export default Wrapper;
