import React from "react";
import LoginTextBox from "../LoginTextBox";
import LoginButton from "../LoginButton";
import styles from "./loginForm.module.css";

interface ILoginFormProps {
  isSignup: boolean;
}

export default function LoginForm({ isSignup }: ILoginFormProps) {
  const icon = {
    info: "fas fa-user-edit fa-2x",
    user: "fas fa-user-circle fa-2x",
    lock: "fas fa-lock fa-2x",
  };

  return (
    <>
      <form action="/todomain">
        {isSignup && (
          <LoginTextBox
            type="text"
            placeholder="Enter your name in app"
            inputName="In-app name"
            iconClass={icon.info}
            className={styles.inputContainer}
          />
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
          <>
            <LoginTextBox
              type="password"
              placeholder="Re-enter your password"
              inputName="Re-password"
              iconClass={icon.lock}
              className={styles.inputContainer}
            />

            <LoginButton className={styles.signupButton} name="Signup" />
          </>
        )}

        {!isSignup && (
          <LoginButton className={styles.loginButton} name="Login" />
        )}
      </form>
    </>
  );
}
