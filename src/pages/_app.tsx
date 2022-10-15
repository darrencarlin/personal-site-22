import type { AppProps } from "next/app";
import Header from "../components/Header";
import SEO from "../components/SEO";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SEO />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
