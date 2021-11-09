import LoginTextBox from "../LoginTextBox";
import LoginButton from "../LoginButton";
import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setIsSignup } from "../../../redux/signupState/action";
import { signupStatus } from "../../../pages/api/getUser";
import styles from "./styles.module.css";

const icon = {
  info: "fas fa-user-edit fa-2x",
  user: "fas fa-user-circle fa-2x",
  lock: "fas fa-lock fa-2x",
};

export default function SignupForm() {
  const router = useRouter();

  if (router.asPath === "/login" || router.asPath === "/") {
    router.replace("/login", "/signup");
  }

  const dispatch = useDispatch();

  const [notification, setNotification] = useState("");
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let status = await signupStatus(user);

    if (status.success) {
      dispatch(setIsSignup(false));
      router.push("/login");
    } else {
      const error_message = Object.values(status.errors)[0][0];
      setNotification(error_message);
    }
  };

  const handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
    let data = event.currentTarget;

    user[data.name] = data.value;

    setUser(user);
  };

  return (
    <>
      <div className={styles.errorNoti}>{notification}</div>
      <form onSubmit={handleSubmit}>
        <LoginTextBox
          onChange={handleOnChange}
          label="Full name"
          type="text"
          name="fullname"
          id="fullname"
          placeholder="Enter your name in app"
          iconClass={icon.info}
          className={styles.inputContainer}
        />

        <LoginTextBox
          onChange={handleOnChange}
          label="Email"
          type="text"
          name="email"
          id="email"
          placeholder="Enter your email"
          iconClass={icon.user}
          className={styles.inputContainer}
        />

        <LoginTextBox
          onChange={handleOnChange}
          label="Password"
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          iconClass={icon.lock}
          className={styles.inputContainer}
        />

        <LoginTextBox
          onChange={handleOnChange}
          label="Re-password"
          type="password"
          id="re-password"
          name="rePassword"
          placeholder="Re-enter your password"
          iconClass={icon.lock}
          className={styles.inputContainer}
        />

        <LoginButton className={styles.signupButton} name="Signup" />
      </form>
    </>
  );
}
