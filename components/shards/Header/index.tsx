import React from "react";
import LoginPage from "../../LoginPage";
import Link from "next/link";
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
        <i className="fas fa-bars fa-2x"></i>
      </div>
      <nav className={styles.headerRight}>
        <div className={styles.navItem}>
          <span>Features</span>
          <i className="fas fa-chevron-down"></i>
        </div>
        <div className={styles.navItem}>
          <Link href="/#about">
            <a>About us</a>
          </Link>
        </div>
        <div className={styles.navItem}>
          <Link href="/login">
            <a>Sign In</a>
          </Link>
        </div>
        <div className={styles.navItem}>Sign Up</div>
      </nav>
    </header>
  );
}
