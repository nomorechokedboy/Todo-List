import React from "react";
import LoginForm from "../LoginForm";
import SignupForm from "../SignupForm";
import GoogleButton from "../GoogleButton";
import { Text } from "./components/Text";
import { selectIsSignup, setIsSignup } from "../../../redux/isSignup/action";
import { useDispatch, useSelector } from "react-redux";
import styles from "./loginContainer.module.scss";

export default function LoginContainer() {
  const dispatch = useDispatch();
  const isSignup = useSelector(selectIsSignup);

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
