import Head from "next/head";
import Divider from "../components/Divider";
import Events from "../components/Events";
import Hero from "../components/Hero";
import Article from "../components/Article";
import Testimonials from "../components/Testimonials";

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Running-passion</title>
        <meta name="description" content="Running-passion Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Article data={data} />
      <Divider img="/images/run_02.jpg" title="Let's Run!" position="center" />
      <Events />
      <Divider
        img="/images/running_30.jpg"
        title="Let's Run!"
        position="bottom"
      />
      <Testimonials />
    </>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // API_KEY
  const key = process.env.API_KEY;
  // Fetch data from external API
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=50.08&lon=19.91&units=metric&appid=${key}`
  );
  const data = await res.json();
  // Pass data to the page via props
  return { props: { data } };
}
