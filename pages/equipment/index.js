import Head from "next/head";
import AwesomeCard from "../../components/AwesomeCard";
import styles from "../../styles/EquipmentPage.module.css";

function EquipmentPage() {
  return (
    <>
      <Head>
        <title>equipment | running-passion</title>
        <meta
          name="description"
          content="Equipment page, equipment necessary for running, watches, shoes, clothing"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.about}>
        <div className={styles.header}>
          <h2>Equipment and Gadgets</h2>
          <p>
            Running is one of the simplest and cheapest forms of sports. You
            only need shoes, shorts, a t-shirt and a watch to start training. To
            run healthy and long-distance, choose your equipment.
          </p>
        </div>
        <div className={styles.wrapper}>
          <AwesomeCard
            img="/images/t-shirts.jpg"
            title="Clothes"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            link="https://www.zuerichmarathon.ch/"
          />
          <AwesomeCard
            img="/images/polar_m430.jpg"
            title="Watches"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            link="https://www.marathon.tokyo/en/"
          />
          <AwesomeCard
            img="/images/shoe_005.jpg"
            title="Shoes"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            link="https://www.baa.org/"
          />
        </div>
      </section>
    </>
  );
}

export default EquipmentPage;
