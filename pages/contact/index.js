import Head from "next/head";
import Form from "../../components/Form";
import Map from "../../components/Map";
import styles from "../../styles/Contact.module.css";

function ContactPage(props) {
  const addMsgHandler = (msgData) => {
    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(msgData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

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
          <Form onAddMsg={addMsgHandler} />
        </div>
      </section>
    </>
  );
}

export default ContactPage;
