import React, { useState, useRef, useEffect } from "react";
import { VscMenu } from "react-icons/vsc";
import { GiFootprint } from "react-icons/gi";
import { links } from "../data/navigation-data.js";
import Link from "next/link";
import styles from "../styles/Navigation.module.css";

const Navigation = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <header className={styles.navigation}>
      <nav className={styles.nav}>
        <div className={styles.center}>
          <div className={styles.header}>
            <div className={styles.logo}>
              <Link href="/">
                <a>running-passion</a>
              </Link>
              <GiFootprint className={styles.icon} />
            </div>

            <button className={styles.toggle} onClick={toggleLinks}>
              <VscMenu size={30} />
            </button>
          </div>
          <div className={styles.linksContainer} ref={linksContainerRef}>
            <ul className={styles.links} ref={linksRef}>
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id} onClick={toggleLinks}>
                    <Link href={url}>
                      <a>{text}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
