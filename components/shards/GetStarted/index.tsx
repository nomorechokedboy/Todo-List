import Image from "next/image";
import React from "react";
import Slogan from "../Slogan";
import StartedButton from "../StartedButton";
import banner_img from "../../../public/banner.jpg";
import styles from "./getStarted.module.scss";

export default function GetStarted() {
  return (
    <section className={styles.container}>
      <Slogan text="StikiNote, once you note, you will love!" />
      <StartedButton />
      <div className={styles.banner}>
        <Image src={banner_img} alt="Homepage banner" />
      </div>
    </section>
  );
}
