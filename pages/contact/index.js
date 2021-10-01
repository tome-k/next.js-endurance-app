import Divider from "../../components/Divider";
import Form from "../../components/Form";
import Map from "../../components/Map";
import styles from "../../styles/Contact.module.css";

function ContactPage() {
  return (
    <section className={styles.contact}>
      {/* <Divider
        img="/images/run_24.jpg"
        title="Get some endorphin!"
        position="center"
      /> */}
      <Map />
      {/* <Form /> */}
    </section>
  );
}

export default ContactPage;
