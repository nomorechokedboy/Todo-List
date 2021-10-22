import React from "react";
import Slogan from "../Slogan";
import StartedButton from "../StartedButton";
import styles from "./getStarted.module.css";

export default function GetStarted() {
  return (
    <section className={styles.container}>
      <Slogan />
      <StartedButton />
      <img className={styles.banner} src="/banner.jpg" alt="Homepage banner" />
    </section>
  );
}
