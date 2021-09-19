import Image from "next/image";
import styles from "../styles/Hero.module.css";

function Hero() {
  return (
    <div className={styles.heroContainer}>
      <Image
        src="/images/run_04.jpg"
        alt="landscape runner photo"
        layout="fill"
        objectFit="cover"
        quality={100}
        className={styles.heroImage}
      />
    </div>
  );
}

export default Hero;
