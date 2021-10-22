import React from "react";
import styles from "./loginTextBox.module.css";

function inputNameAreEqual(
  prev: { inputName: string },
  next: { inputName: string }
) {
  return prev.inputName === next.inputName;
}

const LoginTextBox = ({ iconClass, inputName, placeholder, type }) => {
  return (
    <div className={styles.inputContainer}>
      <span className={styles.inputName}>{inputName}</span>
      <div className={styles.textBox}>
        <i className={iconClass}></i>
        <input className={styles.input} placeholder={placeholder} type={type} />
      </div>
    </div>
  );
};

export default React.memo(LoginTextBox, inputNameAreEqual);
