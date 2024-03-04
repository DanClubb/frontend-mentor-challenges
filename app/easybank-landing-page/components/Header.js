"use client";

import { useState } from "react";
import Image from "next/image";
import IMAGES from "../images/images";
import styles from "../easybank.module.css";

function Header({ publicSans }) {
  const [mobileNavExpanded, setMobileNavExpanded] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavExpanded((prev) => {
      return !prev;
    });
  };
  return (
    <header className={`${styles.header} ${publicSans.className}`}>
      <Image src={IMAGES.logo} alt="easybank logo" />
      <nav className={styles.nav}>
        <div
          className={styles.darkenBackground}
          data-darken={mobileNavExpanded}
        ></div>
        <button
          className={`${styles.mobileNavToggle}`}
          aria-controls="nav"
          aria-expanded={mobileNavExpanded}
          onClick={toggleMobileNav}
        >
          <span className="sr-only">Menu</span>
        </button>
        <ul className={styles.navItems} data-visible={mobileNavExpanded}>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>
      </nav>
      <button className={`${styles.button} ${styles.headerButton}`}>
        Request Invite
      </button>
    </header>
  );
}

export default Header;
