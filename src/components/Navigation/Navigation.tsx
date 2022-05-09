import Wrapper from "components/Wrapper";
import Link from "next/link";
import { useRouter } from "next/router";
import { Anchor, Links } from "./style";

const Navigation = () => {
  const { asPath } = useRouter();

  const isRoot = asPath === "/";

  return (
    <Links>
      {!isRoot && (
        <Link href="/" passHref>
          <Anchor>Home</Anchor>
        </Link>
      )}
      <Link href="/blog" passHref>
        <Anchor>Blog</Anchor>
      </Link>
      <Link href="/contact" passHref>
        <Anchor>Contact</Anchor>
      </Link>
    </Links>
  );
};

export default Navigation;
