import Divider from "../../components/Divider";
import Form from "../../components/Form";
import Map from "../../components/Map";
import styles from "../../styles/Contact.module.css";

function ContactPage() {
  return (
    <section className={styles.contact}>
      <h4>Here You can reach Us</h4>
      <h5>every wednesday and sunday</h5>
      <h6>at 6 PM</h6>
      <Map />
      <Divider
        img="/images/run_24.jpg"
        title="Get some endorphin!"
        position="center"
      />
      {/* <Form /> */}
    </section>
  );
}

export default ContactPage;
