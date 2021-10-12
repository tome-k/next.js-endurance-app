import Head from "next/head";
import Form from "../../components/Form";
import Map from "../../components/Map";
import styles from "../../styles/Contact.module.css";

function ContactPage() {
  return (
    <>
      <Head>
        <title>contact | running-passion</title>
        <meta
          name="description"
          content="Contact page running passion, form."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.contact}>
        <h4>Here You can reach Us</h4>
        <h5>every wednesday and sunday</h5>
        <h6>at 6 PM</h6>
        <Map />
        <div className={styles.form__container}>
          <h3>Write to Us</h3>
          <Form />
        </div>
      </section>
    </>
  );
}

export default ContactPage;
