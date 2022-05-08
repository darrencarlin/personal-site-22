import Link from "next/link";
import { useRouter } from "next/router";
import { Links } from "./style";

const Navigation = () => {
  const { asPath } = useRouter();
  console.log(asPath);

  const isRoot = asPath === "/";

  return (
    <Links>
      {!isRoot && (
        <Link href="/" passHref>
          <a>/</a>
        </Link>
      )}
      <Link href="/about" passHref>
        <a>About</a>
      </Link>
      <Link href="/work" passHref>
        <a>Work</a>
      </Link>
      <Link href="/blog" passHref>
        <a>Blog</a>
      </Link>
      <Link href="/contact" passHref>
        <a>Contact</a>
      </Link>
    </Links>
  );
};

export default Navigation;
