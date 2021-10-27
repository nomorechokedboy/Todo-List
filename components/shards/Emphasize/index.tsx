import React from "react";
import Slogan from "../Slogan";
import StartedButton from "../StartedButton";
import styles from "./emphasize.module.css";

const Emphasize = () => {
  return (
    <section className={styles.container}>
      <img
        className={styles.emphasizeImage}
        src="/tea.jpeg"
        alt="Meditation picture"
      />
      <div className={styles.leftWrapper}>
        <Slogan />
        <StartedButton />
      </div>
    </section>
  );
};

export default Emphasize;
