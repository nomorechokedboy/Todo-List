import React, { useState } from "react";
import LoginForm from "../LoginForm";
import GoogleButton from "../GoogleButton";
import styles from "./loginContainer.module.css";

export default function LoginContainer() {
  const [isSignup, setIsSignup] = useState(false);

  const handleChange = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className={styles.loginContainer}>
      <LoginForm isSignup={isSignup} />

      {!isSignup && (
        <div>
          Doesn&apos;t have an account? &nbsp;
          <span className={styles.link} onClick={handleChange}>
            Click here
          </span>
        </div>
      )}

      {!isSignup && <GoogleButton />}

      {isSignup && (
        <a className={styles.link} onClick={handleChange}>
          Back
        </a>
      )}
    </div>
  );
}
