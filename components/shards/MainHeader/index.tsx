import React from "react";
import styles from "./mainHeader.module.scss";
import MainHeaderLeft from "./components/MainHeaderLeft";
import MainHeaderMiddle from "./components/MainHeaderMiddle";
import MainHeaderRight from "./components/MainHeaderRight";

export default function MainHeader() {
  return (
    <header className={styles.container}>
      <MainHeaderLeft />
      <MainHeaderMiddle />
      <MainHeaderRight />
    </header>
  );
}
