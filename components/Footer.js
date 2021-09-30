import styles from "../styles/Footer.module.css";
import { social } from "../data/data.js";
import Link from "next/link";

function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <p>
          <Link href="https://www.nextjs.com/">
            <a target="_blank" rel="noreferrer" className={styles.footerLink}>
              next.js
            </a>
          </Link>
          running-passion &copy; {new Date().getFullYear()}{" "}
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
