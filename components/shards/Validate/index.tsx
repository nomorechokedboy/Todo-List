import React from "react";
import styles from "./styles.module.scss";

interface ValidateProps {
  message: string;
}

export const ValidateError = React.memo(({ message }: ValidateProps) => {
  return <p className={styles.error}>{message}</p>;
});
