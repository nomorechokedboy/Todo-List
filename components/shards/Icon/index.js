import React from "react";
import styles from "./icon.module.css";

export default function Icon({ iconName, handleClick }) {
  return (
    <div className={styles.icon} onClick={handleClick}>
      <i class={`fas fa-${iconName}`}></i>
    </div>
  );
}
