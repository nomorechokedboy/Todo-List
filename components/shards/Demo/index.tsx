import React from "react";
import Image from "next/image";
import Slogan from "../Slogan";
import styles from "./demo.module.css";

const Demo = () => {
  return (
    <section className={styles.container}>
      {/* <div > */}
      <img
        src="/demo.png"
        alt="App demo image"
        className={styles.demoImage}
        // placeholder="blur"
        //               blurDataURL="https://theme.hstatic.net/200000093231/1000565457/14/lazyload.jpg?v=963"
        // width={100}
        // height={}
      />
      {/* </div> */}
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
