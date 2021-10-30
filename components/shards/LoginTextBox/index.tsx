import React from "react";
import styles from "./loginTextBox.module.css";

interface ILoginTextBoxProps {
  id: string;
  type: string;
  placeholder: string;
  iconClass: string;
  inputName: string;
  className: string;
  name: string;
}

export default function LoginTextBox({
  id,
  type,
  iconClass,
  inputName,
  placeholder,
  className,
  name,
}: ILoginTextBoxProps) {
  return (
    <>
      <div className={className}>
        <label htmlFor={id} className={styles.inputName}>
          {inputName}
        </label>
        <div className={styles.textBox}>
          <i className={iconClass}></i>
          <input
            id={id}
            name={name}
            className={styles.input}
            placeholder={placeholder}
            type={type}
            required
          />
        </div>
      </div>
    </>
  );
}
