import React from "react";
import styles from "./loginButton.module.css";

export default function LoginButton() {
  return (
    <div className={styles.loginBtnWrapper}>
      <button type="submit" className={styles.loginBtn}>
        Login
      </button>
    </div>
  );
}
