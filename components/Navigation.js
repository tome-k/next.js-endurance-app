import React, { useState, useRef, useEffect } from "react";
import { GiRunningNinja, GiRunningShoe } from "react-icons/gi";
import { links, social } from "../data/nav_data.js";
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
    <nav className={styles.nav}>
      <div className={styles.center}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <Link href="/">
              <a>running-passion</a>
            </Link>
            <GiRunningNinja className={styles.icon} />
          </div>

          <button className={styles.toggle} onClick={toggleLinks}>
            <GiRunningShoe size={30} />
          </button>
        </div>
        <div className={styles.linksContainer} ref={linksContainerRef}>
          <ul className={styles.links} ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id} onClick={toggleLinks}>
                  <Link href={url}>{text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className={styles.social}>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <Link href={url}>
                  <a target="_blank" rel="noreferrer">
                    {icon}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
