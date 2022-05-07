import type { AppContext, AppProps } from "next/app";
import "../styles/global.scss";
import { ThemeProvider } from "styled-components";
import App from "next/app";
import Layout from "components/Layout";

const theme = {
  colors: {
    font: "#333333",
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
