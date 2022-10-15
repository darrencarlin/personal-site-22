import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  body: "#202124",
  textColor: "#fff",
  linkColor: "#64B2F7",
};

export const lightTheme = {
  body: "#fff",
  textColor: "#111111",
  linkColor: "#0074d9",
};

export const GlobalStyles = createGlobalStyle`
 body {
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.textColor};
  transition: .3s ease;

  a {
    color: ${(props) => props.theme.linkColor} !important;
  }
 }
`;
