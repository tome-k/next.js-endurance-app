import Link from "next/link";
import styles from "../styles/404.module.css";
import router from "next/router";
import { useEffect } from "react";

function NotFound404() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/");
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>
      <h2>404</h2>
      <h4>page not found!</h4>
      <small>
        After 10 seconds you will be automatically redirected to the home page
        or press it back{" "}
      </small>
      <Link href="/">
        <a>go back</a>
      </Link>
    </div>
  );
}

export default NotFound404;
