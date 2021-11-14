import Image from "next/image";
import styles from "../styles/Hero.module.css";
import Button from "./Button";

function Hero() {
  return (
    <section className={styles.heroContainer}>
      <Image
        src="/images/run_00.jpg"
        alt="Ultramarathon runner in the clouds, running down the mountain, before dawn"
        layout="fill"
        objectFit="cover"
        quality={100}
        className={styles.heroImage}
      />
      <div className={styles.inner}>
        <h4>Go For Running</h4>
        <h2>Mountain Marathon</h2>
        <h3>October 10 2021</h3>
        <Button link="https://findarace.com/marathons/mountain" target="_blank">
          Sign In
        </Button>
      </div>
    </section>
  );
}

export default Hero;
