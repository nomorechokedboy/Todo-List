import LoginTextBox from "../LoginTextBox";
import LoginButton from "../LoginButton";
import SuccessPopup from "../SuccessPopup";
import { useMemo, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setIsSignup } from "../../../redux/signupState/action";
import { signupStatus } from "../../../pages/api/getUser";
import styles from "./styles.module.css";

interface UserInputElement extends HTMLInputElement {
  password: HTMLInputElement;
  rePassword: HTMLInputElement;
}

export default function SignupForm() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [notification, setNotification] = useState("");
  const [success, setSuccess] = useState(false);
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    password: "",
    rePassword: "",
  });

  if (router.asPath === "/login" || router.asPath === "/") {
    router.replace("/login", "/signup");
  }

  const icon = useMemo(() => {
    return {
      info: "fas fa-user-edit fa-2x",
      user: "fas fa-user-circle fa-2x",
      lock: "fas fa-lock fa-2x",
    };
  }, []);

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    const response = await signupStatus(user);

    if (response.success) {
      setSuccess(true);

      setTimeout(() => {
        dispatch(setIsSignup(false));
        router.push("/login");
      }, 1000);
    } else {
      setNotification(response.error);

      const target = event.target as UserInputElement;
      target.password.value = "";
      target.rePassword.value = "";
    }
  };

  const handleOnChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const data = event.currentTarget;

    user[data.name] = data.value;

    setUser(user);
  };

  return (
    <>
      {success && <SuccessPopup name="Signup" />}
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
