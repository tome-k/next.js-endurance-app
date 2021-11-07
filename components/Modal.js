import styles from "../styles/Modal.module.css";
import Image from "next/image";

function Modal(props) {
  function cancelHandler() {
    props.onCancel();
  }

  return (
    <div className={styles.modal}>
      <Image
        layout="fill"
        objectFit="cover"
        alt="plans schedules image"
        src={props.img}
        className={styles.modal_img}
      />
      <div className={styles.modal_container}>
        <button className="btn" onClick={cancelHandler}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
