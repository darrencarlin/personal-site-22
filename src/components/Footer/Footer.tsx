import React from "react";
import { FooterContainer } from "./style";

const Footer = () => {
  return <FooterContainer> &copy;{new Date().getFullYear()}</FooterContainer>;
};

export default Footer;
