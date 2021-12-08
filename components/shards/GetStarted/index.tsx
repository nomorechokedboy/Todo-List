import Image from "next/image";
import React from "react";
import Slogan from "../Slogan";
import StartedButton from "../StartedButton";
import styles from "./getStarted.module.css";

export default function GetStarted() {
  return (
    <section className={styles.container}>
      <Slogan />
      <StartedButton />
      <div className={styles.banner}>
        <Image src="/banner.jpg" alt="Homepage banner" />
      </div>
    </section>
  );
}
