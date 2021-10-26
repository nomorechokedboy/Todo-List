import React from "react";
import styles from "./loginTextBox.module.css";

function areEqual(prev: { inputName: string }, next: { inputName: string }) {
  return prev.inputName === next.inputName;
}

interface IProps {
  type: string;
  placeholder: string;
  iconClass: string;
  inputName: string;
  className: string;
}

const LoginTextBox = ({
  type,
  iconClass,
  inputName,
  placeholder,
  className,
}: IProps) => {
  return (
    <div className={className}>
      <span className={styles.inputName}>{inputName}</span>
      <div className={styles.textBox}>
        <i className={iconClass}></i>
        <input
          className={styles.input}
          placeholder={placeholder}
          type={type}
          required
        />
      </div>
    </div>
  );
};

export default React.memo(LoginTextBox, areEqual);
