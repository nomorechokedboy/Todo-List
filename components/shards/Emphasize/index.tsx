import Image from "next/image";
import React from "react";
import Slogan from "../Slogan";
import StartedButton from "../StartedButton";
import styles from "./emphasize.module.css";

const Emphasize = () => {
  return (
    <section className={styles.container}>
      <div className={styles.emphasizeImage}>
        <Image src="/tea.jpeg" alt="Meditation picture" placeholder="blur" />
      </div>
      <div className={styles.leftWrapper}>
        <Slogan />
        <StartedButton />
      </div>
    </section>
  );
};

export default Emphasize;
