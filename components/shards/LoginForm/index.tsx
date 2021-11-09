import { useState } from "react";
import LoginTextBox from "../LoginTextBox";
import LoginButton from "../LoginButton";
import { setAuth } from "../../../redux/auth/action";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { loginStatus } from "../../../pages/api/getUser";
import styles from "./loginForm.module.css";

const icon = {
  info: "fas fa-user-edit fa-2x",
  user: "fas fa-user-circle fa-2x",
  lock: "fas fa-lock fa-2x",
};

export default function LoginForm() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(false);
  const [notification, setNotification] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleCheckboxOnChange = (event: React.FormEvent<HTMLInputElement>) => {
    let checked = event.currentTarget.checked;

    setChecked(checked);
  };

  const handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
    let data = event.currentTarget;

    user[data.name] = data.value;

    setUser(user);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let status = await loginStatus(user);

    if (status.success) {
      const token = status.token;

      if (checked) {
        dispatch(setAuth(token));
        localStorage.setItem("token", token);
      }

      router.push("/todomain");
    } else {
      const error_message = Object.values(status.errors)[0][0];
      setNotification(error_message);
    }
  };

  return (
    <>
      <div className={styles.errorNoti}>{notification}</div>
      <form onSubmit={handleSubmit}>
        <LoginTextBox
          onChange={handleOnChange}
          label="Email"
          name="email"
          id="email"
          type="text"
          placeholder="Enter your email"
          iconClass={icon.user}
          className={styles.inputContainer}
        />

        <LoginTextBox
          onChange={handleOnChange}
          label="Password"
          name="password"
          id="password"
          type="password"
          placeholder="Enter your password"
          iconClass={icon.lock}
          className={styles.inputContainer}
        />
        <div className={styles.checkboxContainer}>
          <input
            onChange={handleCheckboxOnChange}
            type="checkbox"
            className={styles.checkbox}
          />
          <span>Remember me</span>
        </div>
        <LoginButton className={styles.loginButton} name="Login" />
      </form>
    </>
  );
}
