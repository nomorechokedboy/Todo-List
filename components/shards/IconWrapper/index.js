import React from "react";
import styles from "./iconWrapper.module.css";

export default function IconWrapper({ children }) {
  return <div className={styles.iconWrapper}>{children}</div>;
}
