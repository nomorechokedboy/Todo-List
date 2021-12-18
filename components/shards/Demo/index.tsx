import React from "react";
import Image from "next/image";
import demo_img from "../../../public/demo.png";
import Slogan from "../Slogan";
import styles from "./demo.module.scss";

const Demo = () => {
  return (
    <section className={styles.container}>
      <Image
        src={demo_img}
        alt="App demo image"
        className={styles.demoImage}
        placeholder="blur"
        blurDataURL="https://theme.hstatic.net/200000093231/1000565457/14/lazyload.jpg?v=963"
      />
      <div className={styles.textWrapper}>
        <Slogan text="A new look for any modern online note" />
        <p className={styles.descript}>
          StikiNote was design with friendly user interface, you can add your
          note everywhere, everytime, even when you are in WC,.. You can search
          for your last note in anymoment and check what you have done in
          notime. Enjoy yourself to have these feeling...
        </p>
      </div>
    </section>
  );
};

export default Demo;
