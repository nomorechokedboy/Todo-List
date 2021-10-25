import React from "react";
import styles from "./icon.module.css";

export default function Icon({ children, handleClick }) {
  return (
    <div className={styles.icon} onClick={handleClick}>
      {children}
    </div>
  );
}
