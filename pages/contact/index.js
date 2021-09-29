import styles from "../../styles/Contact.module.css";

function ContactPage() {
  return (
    <>
      <section className={styles.contact}>
        <div className={styles.container}>
          <h3>Email Me</h3>
          <form method="POST" action="send">
            <div className={styles.control}>
              <label>Full Name</label>
              <input type="text" name="fullname" />
            </div>
            <div className={styles.control}>
              <label>Email Address</label>
              <input type="email" name="email" />
            </div>
            <div className={styles.control}>
              <label>Phone Number</label>
              <input type="text" name="phone" />
            </div>
            <div className={styles.control}>
              <label>Message</label>
              <textarea name="message" rows="5"></textarea>
            </div>
            <div className={styles.control}>
              <button type="submit" className={styles.btn}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
