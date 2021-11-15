import LoginTextBox from "../LoginTextBox";
import LoginButton from "../LoginButton";
import SuccessPopup from "../SuccessPopup";
import { useMemo, useState } from "react";
import { setAuth } from "../../../redux/auth/action";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { loginStatus } from "../../../pages/api/getUser";
import styles from "./loginForm.module.css";

/**
 * setStorageWithExpiry works like localStorage.setItem() but with expiry time
 * @param key The key in storage
 * @param value The item need to store
 * @param ttl The time expire in millisecond
 */
const setStorageWithExpiry = (key: string, value: string, ttl: number) => {
  const now = new Date();
  const item = {
    value: value,
    expiry: now.getTime() + ttl,
  };

  localStorage.setItem(key, JSON.stringify(item));
};

interface UserInputElement extends HTMLInputElement {
  password: HTMLInputElement;
}

export default function LoginForm() {
  const router = useRouter();
  const dispatch = useDispatch();

  if (router.asPath === "/signup") {
    router.replace("/login");
  }

  const [success, setSuccess] = useState(false);
  const [checked, setChecked] = useState(false);
  const [notification, setNotification] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const icon = useMemo(() => {
    return {
      info: "fas fa-user-edit fa-2x",
      user: "fas fa-user-circle fa-2x",
      lock: "fas fa-lock fa-2x",
    };
  }, []);

  const handleCheckboxOnChange = (
    event: React.FormEvent<HTMLInputElement>
  ): void => {
    const checked = event.currentTarget.checked;

    setChecked(checked);
  };

  const handleOnChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const data = event.currentTarget;

    user[data.name] = data.value;

    setUser(user);
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    setNotification("Waiting..."); // wait for validation

    const [token, error] = await loginStatus(user);

    if (token) {
      // remember me
      if (checked) {
        dispatch(setAuth(token));

        const ttl = 604_800_000; // 7 days
        setStorageWithExpiry("token", token, ttl);
      }

      setSuccess(true);

      setTimeout(() => {
        router.push("/todomain");
      }, 1000);
    } else {
      setNotification(error);

      const target = event.target as UserInputElement;
      target.password.value = "";
    }
  };

  const textboxValue = useMemo(() => {
    return {
      email: "email",
      pwd: "password",
    };
  }, []);

  return (
    <>
      {success && <SuccessPopup name="Login" />}
      <div className={styles.errorNoti}>{notification}</div>
      <form onSubmit={handleSubmit}>
        <LoginTextBox
          onChange={handleOnChange}
          label={textboxValue.email}
          name={textboxValue.email}
          id={textboxValue.email}
          type={textboxValue.email}
          placeholder={`Enter your ${textboxValue.email}`}
          iconClass={icon.user}
        />

        <LoginTextBox
          onChange={handleOnChange}
          label={textboxValue.pwd}
          name={textboxValue.pwd}
          id={textboxValue.pwd}
          type={textboxValue.pwd}
          placeholder={`Enter your ${textboxValue.pwd}`}
          iconClass={icon.lock}
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
