import "../styles/globals.css";
import Head from "next/head";
import Layout from "../components/Layout";
import Notification from "../components/Notification";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
      {/* <Notification /> */}
    </Layout>
  );
}

export default MyApp;
