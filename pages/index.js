import Head from "next/head";
import Divider from "../components/Divider";
import Events from "../components/Events";
import Hero from "../components/Hero";
import Article from "../components/Article";
import Testimonial from "../components/Testimonial";
import TestimonialsWrapper from "../components/TestimonialsWrapper";

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
      <TestimonialsWrapper>
        <Testimonial
          img="/images/shoe_005.jpg"
          name="Mario Golik"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas amet deleniti velit omnis doloremque aliquid, ipsum temporibus ullam quia repellendus."
          desc="marathoner"
        />
        <Testimonial
          img="/images/shoe_001.jpg"
          name="Mario Golik"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas amet deleniti velit omnis doloremque aliquid, ipsum temporibus ullam quia repellendus."
          desc="marathoner"
        />
        <Testimonial
          img="/images/shoe_004.jpg"
          name="Mario Golik"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas amet deleniti velit omnis doloremque aliquid, ipsum temporibus ullam quia repellendus."
          desc="marathoner"
        />
        <Testimonial
          img="/images/shoe_003.jpg"
          name="Mario Golik"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas amet deleniti velit omnis doloremque aliquid, ipsum temporibus ullam quia repellendus."
          desc="marathoner"
        />
      </TestimonialsWrapper>
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
