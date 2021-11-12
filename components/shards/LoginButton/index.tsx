import React from "react";
import styles from "./loginButton.module.css";

interface ILoginButtonProps {
  name: string;
  className: string;
  onClick?: any;
}

export default function LoginButton({
  onClick,
  name,
  className,
}: ILoginButtonProps) {
  return (
    <div className={styles.loginBtnWrapper}>
      <input
        type="submit"
        onClick={onClick}
        className={`${styles.loginBtn} ${className}`}
        value={name}
      />
    </div>
  );
}
