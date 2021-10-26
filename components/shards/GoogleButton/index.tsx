import React from "react";
import Image from "next/image";
import styles from "./googleButton.module.css";

export default function GoogleButton() {
  return (
    <div className={styles.ggBtn}>
      <div className={styles.icon}>
        <Image src="/googleIcon.png" alt="Google icon" width={30} height={30} />
      </div>
      <span className={styles.btnText}>Signin with Google</span>
    </div>
  );
}
