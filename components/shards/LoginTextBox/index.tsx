import React from "react";
import styles from "./loginTextBox.module.css";

function inputNameAreEqual(
  prev: { inputName: string },
  next: { inputName: string }
) {
  return prev.inputName === next.inputName;
}

type Props = {
  type: string;
  placeholder: string;
  iconClass: string;
  inputName: string;
  className: string;
};

const LoginTextBox = ({
  type,
  iconClass,
  inputName,
  placeholder,
  className,
}: Props) => {
  return (
    <div className={className}>
      <span className={styles.inputName}>{inputName}</span>
      <div className={styles.textBox}>
        <i className={iconClass}></i>
        <input className={styles.input} placeholder={placeholder} type={type} />
      </div>
    </div>
  );
};

export default React.memo(LoginTextBox, inputNameAreEqual);
