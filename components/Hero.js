import Image from "next/image";
import styles from "../styles/Hero.module.css";
import Link from "next/link";

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
        <h2>Mountain Marathon</h2>
        <h3>October 10 2021</h3>
        <button>
          <Link href="https://mountaintrails.org/event-race-mtf/mid-mountain-marathon/">
            <a target="_blank" rel="noreferrer">
              Sign in
            </a>
          </Link>
        </button>
      </div>
    </section>
  );
}

export default Hero;
