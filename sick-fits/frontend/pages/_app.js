import App, { Container, Component } from "next/app";
import Head from "next/head";

const AppPage = (pageProps) => {
  return (
    <Container>
      <Head>
        <title>Sick fits</title>
      </Head>
      <p>hey I'm on every page</p>
      <Component {...pageProps} />
    </Container>
  );
};

export default AppPage;
