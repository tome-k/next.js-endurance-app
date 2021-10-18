import styles from "../styles/Form.module.css";
import { SiMinutemailer } from "react-icons/si";
import { useRef, useContext } from "react";
import NotificationContext from "../store/notification-context";

function Form() {
  const emailInputRef = useRef();
  const msgInputRef = useRef();
  const notificationCtx = useContext(NotificationContext);

  const sendMsgHandler = (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredMsg = msgInputRef.current.value;

    notificationCtx.showNotification({
      title: "Signing up...",
      message: "Adding feedback in progress..",
      status: "pending",
    });

    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify({ email: enteredEmail, message: enteredMsg }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return res.json().then((data) => {
          throw new Error(data.message || "Something went Wrong!");
        });
      })
      .then((data) => {
        notificationCtx.showNotification({
          title: "Success!",
          message: "Successfully Added Your Feedback!",
          status: "success",
        });
      })
      .catch((error) => {
        notificationCtx.showNotification({
          title: "Error!",
          message: error.message || "Something went wrong!",
          status: "error",
        });
      });

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
