import Head from "next/head";
import Form from "../../components/Form";

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
      <div className="center">
        <Form />
      </div>
    </>
  );
}

export default PlansPage;
