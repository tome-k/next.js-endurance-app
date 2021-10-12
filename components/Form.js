import styles from "../styles/Form.module.css";
import { SiMinutemailer } from "react-icons/si";

import { useEffect } from "react";

function Form() {
  useEffect(() => {
    window.onbeforeunload = () => {
      for (const form of document.getElementsByTagName("form")) {
        form.reset();
      }
    };
  }, []);

  return (
    <div className={styles.form_container}>
      <div className={styles.auth}>
        <h2 className={styles.header}>
          Contact
          <SiMinutemailer size={50} className={styles.icon} />
        </h2>
        <form action="" method="POST">
          <div>
            <label htmlFor="firstname">First Name</label>
            <input type="text" id="firstname" name="firstname" required />
          </div>
          <div>
            <label htmlFor="lastname">Last Name</label>
            <input type="text" id="lastname" name="lastname" required />
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" required></textarea>
          </div>
          <input type="submit" value="Send Message" className={styles.btn} />
        </form>
      </div>
    </div>
  );
}

export default Form;
