import Image from "next/image";
import React from "react";
import meme from "../../../public/meme.gif";
import { Container } from "./style";

const Custom404 = () => {
  return (
    <Container>
      <Image
        alt="Pulp Fiction meme"
        src={meme}
        width={426}
        height={213}
        layout="fixed"
      />
    </Container>
  );
};

export default Custom404;
