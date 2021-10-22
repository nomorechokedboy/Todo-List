import React, { useState } from "react";
import LoginForm from "../LoginForm";
import GoogleButton from "../GoogleButton";
import SignupButton from "../SignupButton";
import LoginButton from "../LoginButton";
import styles from "./loginContainer.module.css";

export default function LoginContainer() {
  const [isSignup, setIsSignup] = useState(false);

  const handleChange = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className={styles.loginContainer}>
      {!isSignup && <GoogleButton />}
      <LoginForm isSignup={isSignup} />
      {!isSignup && <LoginButton />}
      <SignupButton isSignup={isSignup} onClick={handleChange} />
    </div>
  );
}
