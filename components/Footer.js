import styles from "../styles/Footer.module.css";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span>
            running-passion created by mariog8 <br></br>
          </span>
          Built with{" "}
          <Link href="https://www.nextjs.com/">
            <a target="_blank" rel="noreferrer" className={styles.footerLink}>
              Next.js
            </a>
          </Link>
        </p>
        <div className={styles.social}>
          <Link href="https://instagram.com">
            <a target="_blank" rel="noreferrer">
              <FaInstagram className={styles.icon} />
            </a>
          </Link>
          <Link href="https://facebook.com">
            <a target="_blank" rel="noreferrer">
              <FaFacebook className={styles.icon} />
            </a>
          </Link>
          <Link href="https://youtube.com">
            <a target="_blank" rel="noreferrer">
              <FaYoutube className={styles.icon} />
            </a>
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
