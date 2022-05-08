import type { AppContext, AppProps } from "next/app";
import "../styles/global.scss";
import { ThemeProvider } from "styled-components";
import App from "next/app";
import Layout from "components/Layout";

export const theme = {
  colors: {
    text: "#333333",
    blue: "#05c0e3",
    white: "#ffffff",
    bgHover: "#3f3f44",
    bg: "#282c34",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;
