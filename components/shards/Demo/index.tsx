import React from "react";
import Slogan from "../Slogan";
import styles from "./demo.module.css";

const Demo = () => {
  return (
    <section className={styles.container}>
      <img className={styles.demoImage} src="/demo.png" alt="App demo image" />
      <div className={styles.textWrapper}>
        <Slogan />
        <p className={styles.descript}>
          Lorem hic assumenda quis voluptates molestias? Magnam ipsa sit esse
          repellat aperiam, esse. Delectus sint fugit eaque excepturi dolorem
          Praesentium unde fuga natus nisi placeat porro Reprehenderit officiis
          quia nesciunt.
        </p>
      </div>
    </section>
  );
};

export default Demo;
