import React, { useState, useEffect } from "react";
import LoginTextBox from "../LoginTextBox";
import LoginButton from "../LoginButton";
import { useDispatch, useSelector } from "react-redux";
import { setLoginUser, selectLoginResponse } from "../../../redux/login/action";
import styles from "./loginForm.module.css";

export default function LoginForm() {
  const icon = {
    info: "fas fa-user-edit fa-2x",
    user: "fas fa-user-circle fa-2x",
    lock: "fas fa-lock fa-2x",
  };

  const dispatch = useDispatch();
  const [notification, setNotification] = useState("");
  const [success, setSuccess] = useState(false);
  const login = useSelector(selectLoginResponse);

  useEffect(() => {
    if (login !== undefined) {
      setNotification(login.message);
      setSuccess(login.success);

      if (login.success) {
        // setCookie("token", login.token, 1);
      }
    }
  }, [login]);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const username = event.currentTarget.username.value;
    const password = event.currentTarget.password.value;

    dispatch(
      setLoginUser({
        username,
        password,
      })
    );
  };

  useEffect(() => {
    setNotification("");
    setSuccess(false);
  }, []);

  return (
    <>
      <div>{notification}</div>
      <form onSubmit={onSubmit}>
        <LoginTextBox
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
          inputName="Username"
          iconClass={icon.user}
          className={styles.inputContainer}
        />

        <LoginTextBox
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          inputName="Password"
          iconClass={icon.lock}
          className={styles.inputContainer}
        />

        <LoginButton className={styles.loginButton} name="Login" />
      </form>
    </>
  );
}
