import React from "react";
import Slogan from "../Slogan";
import StartedButton from "../StartedButton";
import tea_img from "../../../public/tea.jpeg";
import Image from "next/image";
import styles from "./emphasize.module.scss";

const Emphasize = () => {
  return (
    <section className={styles.container}>
      <div className={styles.emphasizeImage}>
        <Image
          src={tea_img}
          alt="Meditation picture"
          layout="responsive"
          placeholder="blur"
        />
      </div>
      <div className={styles.leftWrapper}>
        <Slogan text="Peaceful design" />
        <StartedButton />
      </div>
    </section>
  );
};

export default Emphasize;
