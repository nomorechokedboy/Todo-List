import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";

export default function MainHeaderLeft() {
  return (
    <section className={styles.left}>
      <div className={styles.headerLogo}>
        <Image src="/logo.png" alt="StikiNote logo" />
      </div>
      <div className={styles.userName}>Stikinote</div>
      <div className={styles.menuButton}>
        <i className="fas fa-bars"></i>
      </div>
    </section>
  );
}
