import styles from "../styles/Footer.module.css";
import { social } from "../data/data.js";
import Link from "next/link";
import { GiFootprint } from "react-icons/gi";

function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span>
            <GiFootprint className={styles.icon} />{" "}
          </span>
          <Link href="https://www.nextjs.com/">
            <a target="_blank" rel="noreferrer" className={styles.footerLink}>
              next.js
            </a>
          </Link>
        </p>
        <ul className={styles.social}>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <Link key={id} href={url}>
                <a className={styles.icon} target="_blank" rel="noreferrer">
                  {icon}
                </a>
              </Link>
            );
          })}
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
