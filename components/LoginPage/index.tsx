import React from "react";
import LoginContainer from "../shards/LoginContainer";
import Image from "next/image";
import styles from "./loginPage.module.css";

const ImageContainer = () => (
  <div className={styles.imageContainer}>
    <Image src="/loginImage.jpg" alt="A peaceful view" layout="fill" />
  </div>
);

const LogoContainer = () => (
  <div className={styles.logoWrapper}>
    <Image src="/newLogo.png" alt="StikiNote logo" width={100} height={100} />
    <span className={styles.pageName}>StikiNote</span>
  </div>
);

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <ImageContainer />
      <div className={styles.main}>
        <LogoContainer />
        <LoginContainer />
      </div>
    </div>
  );
}
