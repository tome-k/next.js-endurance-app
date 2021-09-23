import Image from "next/image";
import styles from "../styles/Hero.module.css";

function Hero() {
  return (
    <section className={styles.heroContainer}>
      <Image
        src="/images/run_00.jpg"
        alt="landscape runner photo"
        layout="fill"
        objectFit="cover"
        quality={100}
        className={styles.heroImage}
      />
      <div className={styles.inner}>
        <h4>Go For Running</h4>
        <h2>Cracovia Marathon</h2>
        <button>Run Now</button>
      </div>
    </section>
  );
}

export default Hero;
