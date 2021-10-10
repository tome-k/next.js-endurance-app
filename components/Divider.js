import styles from "../styles/Divider.module.css";
import Image from "next/image";

function Divider({ img, title, position }) {
  return (
    <div className={styles.dividerContainer}>
      <h2>{title}</h2>
      <Image
        src={img}
        layout="fill"
        objectFit="cover"
        objectPosition={position}
        quality={100}
        className={styles.img}
        alt="Athletics stadium treadmill, rival runners"
      />
    </div>
  );
}

export default Divider;
