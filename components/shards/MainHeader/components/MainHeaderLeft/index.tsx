import Image from "next/image";
import React from "react";
import styles from "./styles.module.scss";

export default function MainHeaderLeft() {
  return (
    <section className={styles.left}>
      <div className={styles.headerLogo}>
        <Image
          src="/logo.png"
          alt="StikiNote logo"
          width={56}
          height={56}
          placeholder="blur"
          blurDataURL="https://theme.hstatic.net/200000093231/1000565457/14/lazyload.jpg?v=963"
        />
      </div>
      <div className={styles.userName}>Stikinote</div>
      <div className={styles.menuButton}>
        <i className="fas fa-bars"></i>
      </div>
    </section>
  );
}
