import React from "react";
import styles from "./styles.module.scss";

interface ValidateProps {
  message: string;
}

function Validate({ message }: ValidateProps) {
  return <p className={styles.error}>{message}</p>;
}

const ValidateError = React.memo(Validate);

export default ValidateError;
