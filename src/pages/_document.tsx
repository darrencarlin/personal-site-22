import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const setInitialTheme = `
    function getUserPreference() {
      if(window.localStorage.getItem('mode')) {
        return window.localStorage.getItem('mode')
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light'
    }
    document.body.dataset.mode = getUserPreference();
  `;

    return (
      <Html>
        <Head />
        <body>
          <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
