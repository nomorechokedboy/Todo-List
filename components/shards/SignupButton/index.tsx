import React from "react";
import styles from "./signupButton.module.css";

interface ISignupButtonProps {
  isSignup: boolean;
  onClick: React.MouseEventHandler;
}

export default function SignupContainer({
  isSignup,
  onClick,
}: ISignupButtonProps) {
  return (
    <div className={styles.signupText}>
      {!isSignup && (
        <>
          Doesn&apos;t have an account?
          <i className="fas fa-arrow-down fa"></i>
        </>
      )}
      <button className={styles.signupBtn} onClick={onClick}>
        Signup
      </button>
    </div>
  );
}
