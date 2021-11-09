import styles from "../styles/404.module.css";
import router from "next/router";
import { useEffect } from "react";
import Image from "next/image";
import Button from "../components/Button";

function Page404() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/");
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>
      <Image
        src="/images/not_found_000.jpg"
        layout="fill"
        alt="An exhausted runner who sits at the finish line of an athletics track"
        objectFit="cover"
        quality={100}
        className={styles.img}
      />
      <h2>404</h2>
      <h4>page not found!</h4>
      <small>
        After 10 seconds you will be automatically redirected to the home page
        or press go back.{" "}
      </small>
      <Button link="/">go back</Button>
    </div>
  );
}

export default Page404;
