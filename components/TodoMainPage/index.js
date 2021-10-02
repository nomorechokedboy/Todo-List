import React from "react";
import styles from "./todoMainPage.module.css";
import MainHeader from "../shards/MainHeader";

export default function TodoMainPage() {
  return (
    <div className={styles.container}>
      <MainHeader />
    </div>
  );
}
