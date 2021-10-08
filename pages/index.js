import Head from "next/head";
import Divider from "../components/Divider";
import Events from "../components/Events";
import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";
import Testimonials from "../components/Testimonials";

export default function Home({ data, errorCode }) {
  return (
    <>
      <Head>
        <title>running-passion</title>
        <meta name="description" content="Running-passion Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <InfoSection data={data} errorCode={errorCode} />
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
export async function getServerSideProps(context) {
  // API_KEY
  const key = process.env.API_KEY;
  // Fetch data from external API
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=50.08&lon=19.91&units=metric&appid=${key}`
  );
  const errorCode = res.ok ? false : res.statusCode;
  const data = await res.json();

  if (!data) {
    return {
      redirect: {
        destination: "/500",
        permanent: false,
      },
    };
  }

  // Pass data to the page via props
  return {
    props: {
      data: data || null,
      errorCode: errorCode || null,
    },
  };
}
