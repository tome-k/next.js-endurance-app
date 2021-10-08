import Image from "next/image";
import Button from "../components/Button";
import styles from "../styles/500.module.css";

function Page500() {
  return (
    <div className={styles.container}>
      <Image
        src="/images/server_000.jpg"
        layout="fill"
        alt="landscape runner photo"
        objectFit="cover"
        quality={100}
        className={styles.img}
      />
      <h3>500</h3>
      <h5>Server-side error occurred</h5>
      <h4>We apologize for any inconvenience. Please Try again later</h4>
      <Button link="/">go back</Button>
    </div>
  );
}

export default Page500;
