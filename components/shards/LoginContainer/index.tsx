import React from "react";
import LoginForm from "../LoginForm";
import SignupForm from "../SignupForm";
import GoogleButton from "../GoogleButton";
import { Text } from "./components/Text";
import { selectIsSignUp, setIsSignup } from "../../../redux/signupState/action";
import { useDispatch, useSelector } from "react-redux";
import styles from "./loginContainer.module.css";

export default function LoginContainer() {
  const isSignup = useSelector(selectIsSignUp);
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(setIsSignup(!isSignup));
  };

  return (
    <div className={styles.loginContainer}>
      {!isSignup ? (
        <>
          <LoginForm />
          <Text
            question="Doesn't have an account?"
            clickText="Click here"
            onClick={handleChange}
          />
          <GoogleButton />
        </>
      ) : (
        <>
          <SignupForm />
          <Text
            question="Already have an account?"
            clickText="Login"
            onClick={handleChange}
          />
        </>
      )}
    </div>
  );
}
