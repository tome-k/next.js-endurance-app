import styles from "../styles/Form.module.css";
import { SiMinutemailer } from "react-icons/si";

import { useEffect, useRef } from "react";

function Form() {
  useEffect(() => {
    window.onbeforeunload = () => {
      for (const form of document.getElementsByTagName("form")) {
        form.reset();
      }
    };
  }, []);

  const emailInputRef = useRef();
  const msgInputRef = useRef();

  const sendMsgHandler = (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredMsg = msgInputRef.current.value;

    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify({ email: enteredEmail, message: enteredMsg }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    e.target.reset();
  };

  return (
    <div className={styles.form_container}>
      <div className={styles.auth}>
        <h2 className={styles.header}>
          Contact
          <SiMinutemailer size={50} className={styles.icon} />
        </h2>
        <form onSubmit={sendMsgHandler}>
          <div>
            <label htmlFor="firstname">First Name</label>
            <input type="text" id="firstname" name="firstname" />
          </div>
          <div>
            <label htmlFor="lastname">Last Name</label>
            <input type="text" id="lastname" name="lastname" />
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              ref={emailInputRef}
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              required
              ref={msgInputRef}
            ></textarea>
          </div>
          <input
            type="submit"
            value="Send Message"
            className={styles.btn}
            onSubmit={sendMsgHandler}
          />
        </form>
      </div>
    </div>
  );
}

export default Form;
