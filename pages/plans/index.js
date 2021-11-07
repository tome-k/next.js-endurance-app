import Head from "next/head";
import PlansCard from "../../components/PlansCard";

function PlansPage() {
  return (
    <>
      <Head>
        <title>plans | running-passion</title>
        <meta
          name="description"
          content="Running schedules, plans for specific distances, competitions"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h3>plans page</h3>
      <PlansCard text="42,195m" />
      <PlansCard text="21,0975m" />
      <PlansCard text="10,000m" />
    </>
  );
}

export default PlansPage;
