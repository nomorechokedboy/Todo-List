import React from "react";
import LoginTextBox from "../LoginTextBox";
import styles from "./loginForm.module.css";

export default function LoginForm({ isSignup }) {
  const icon = {
    user: "fas fa-user-circle fa-2x",
    lock: "fas fa-lock fa-2x",
    info: "fas fa-user-edit fa-2x",
  };

  return (
    <form>
      {isSignup && (
        <>
          <LoginTextBox
            type="text"
            placeholder="Enter your first name"
            inputName="First name"
            iconClass={icon.info}
            className={styles.inputContainer}
          />
          <LoginTextBox
            type="text"
            placeholder="Enter your last name"
            inputName="Last name"
            iconClass={icon.info}
            className={styles.inputContainer}
          />
        </>
      )}

      <LoginTextBox
        type="text"
        placeholder="Enter your username"
        inputName="Username"
        iconClass={icon.user}
        className={styles.inputContainer}
      />
      <LoginTextBox
        type="password"
        placeholder="Enter your password"
        inputName="Password"
        iconClass={icon.lock}
        className={styles.inputContainer}
      />

      {isSignup && (
        <LoginTextBox
          type="password"
          placeholder="Re-enter your password"
          inputName="Re-password"
          iconClass={icon.lock}
          className={styles.inputContainer}
        />
      )}
    </form>
  );
}
