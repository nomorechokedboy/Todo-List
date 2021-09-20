import React from "react";
import styles from "./header.module.css";
// import logo from "../../../public/logo.png"

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <img
          className={styles.headerLogo}
          src="/logo.png"
          alt="StikiNote logo"
        />
        <span className={styles.headerPageName}>StikiNote</span>
        <i class="fas fa-bars fa-2x"></i>
      </div>
      <nav className={styles.headerRight}>
        <div className={styles.navItem}>
          <span>Features</span>
          <i class="fas fa-chevron-down"></i>
        </div>
        <div className={styles.navItem}>About us</div>
        <div className={styles.navItem}>Sign In</div>
        <div className={styles.navItem}>Sign Up</div>
      </nav>
    </header>
  );
}
