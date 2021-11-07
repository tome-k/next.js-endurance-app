import Head from "next/head";
import PlansCard from "../../components/PlansCard";
import styles from "../../styles/PlansPage.module.css";

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
      <h3 className={styles.heading}>Chose your plan</h3>
      <PlansCard text="42,195m" img="/images/marathon_plan.jpg" />
      <PlansCard text="21,0975m" img="/images/half_marathon_plan.jpg" />
      <PlansCard text="10,000m" img="/images/10k-plan.jpg" />
    </>
  );
}

export default PlansPage;
