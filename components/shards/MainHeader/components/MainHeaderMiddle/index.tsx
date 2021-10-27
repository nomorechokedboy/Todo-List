import React from "react";
import styles from "./styles.module.css";

export default function MainHeaderMiddle() {
  return (
    <section className={styles.middle}>
      <input className={styles.searchBar} placeholder="Type to search..." />
      <i className="fas fa-search"></i>
    </section>
  );
}
