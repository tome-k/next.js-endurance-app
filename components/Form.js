import styles from "../styles/Form.module.css";

function Form() {
  return (
    <section className={styles.form}>
      <div className={styles.container}>
        <h3>Contact Us</h3>
        <form method="POST" action="send">
          <div className={styles.control}>
            <label>Full Name</label>
            <input type="text" name="fullname" required />
          </div>
          <div className={styles.control}>
            <label>Email Address</label>
            <input type="email" name="email" required />
          </div>
          <div className={styles.control}>
            <label>Message</label>
            <textarea name="message" rows="5" required></textarea>
          </div>
          <div className={styles.control}>
            <button type="submit" className={styles.btn}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Form;
