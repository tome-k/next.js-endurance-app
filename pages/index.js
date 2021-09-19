import Head from "next/head";
import Divider from "../components/Divider";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <>
      <Head>
        <title>Running-passion</title>
        <meta name="description" content="Running-passion Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Hero />
      <Divider />
    </>
  );
}
