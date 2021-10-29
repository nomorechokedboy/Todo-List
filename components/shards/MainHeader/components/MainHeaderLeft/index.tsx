import React from "react";
import styles from "./styles.module.css";

export default function MainHeaderLeft() {
  return (
    <section className={styles.left}>
      <img className={styles.headerLogo} src="/logo.png" alt="StikiNote logo" />
      <div className={styles.userName}>Stikinote</div>
      <div className={styles.menuButton}>
        <i className="fas fa-bars"></i>
      </div>
    </section>
  );
}
