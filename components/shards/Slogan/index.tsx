import React from "react";
import styles from "./slogan.module.scss";

interface SloganProps {
  text: string;
}

export default function Slogan({ text }: SloganProps) {
  return <span className={styles.pageSlogan}>{text}</span>;
}
