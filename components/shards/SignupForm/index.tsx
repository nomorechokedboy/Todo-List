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

  if (router.asPath === "/login") {
    router.replace("/login", "/signup");
  }

  const [notification, setNotification] = useState("");
  const [success, setSuccess] = useState(false);
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    password: "",
    rePassword: "",
  });

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

    setNotification("Waiting..."); // wait for validation

    const target = event.target as UserInputElement;

    if (target.password.value !== target.rePassword.value) {
      setNotification("Password confirmation does not match");

      target.password.value = "";
      target.rePassword.value = "";
    } else {
      const [token, error] = await signupStatus(user);

      if (token) {
        setSuccess(true);

        setTimeout(() => {
          dispatch(setIsSignup(false));
          router.replace("/login");
        }, 1000);
      } else {
        setNotification(error);

        target.password.value = "";
        target.rePassword.value = "";
      }
    }
  };

  const handlePwdInvalid = (event: React.InvalidEvent<HTMLInputElement>) => {
    event.currentTarget.setCustomValidity(
      "Password length must be 8 and contain at least 1 number"
    );
  };

  const handleOnChange = (event: React.FormEvent<HTMLInputElement>): void => {
    event.currentTarget.setCustomValidity("");
    setNotification("");

    const data = event.currentTarget;
    user[data.name] = data.value;
    setUser(user);
  };

  const textboxValue = useMemo(() => {
    return {
      fullname: "fullname",
      email: "email",
      pwd: "password",
      pwdConfirm: "rePassword",
      pwdPattern: "^(?=.*[a-zA-z])(?=.*\\d)([^\\s]){8,}$",
    };
  }, []);

  return (
    <>
      {success && <SuccessPopup name="Signup" />}
      <div className={styles.errorNoti}>{notification}</div>
      <form onSubmit={handleSubmit}>
        <LoginTextBox
          onChange={handleOnChange}
          label={textboxValue.fullname}
          type="text"
          name={textboxValue.fullname}
          id={textboxValue.fullname}
          placeholder={`Enter your ${textboxValue.fullname}`}
          iconClass={icon.info}
        />

        <LoginTextBox
          onChange={handleOnChange}
          label={textboxValue.email}
          type={textboxValue.email}
          name={textboxValue.email}
          id={textboxValue.email}
          placeholder={`Enter your ${textboxValue.email}`}
          iconClass={icon.user}
        />

        <LoginTextBox
          onChange={handleOnChange}
          label={textboxValue.pwd}
          type={textboxValue.pwd}
          name={textboxValue.pwd}
          id={textboxValue.pwd}
          placeholder={`Enter your ${textboxValue.pwd}`}
          iconClass={icon.lock}
          onInvalid={handlePwdInvalid}
          pattern={textboxValue.pwdPattern}
        />

        <LoginTextBox
          onChange={handleOnChange}
          label={textboxValue.pwdConfirm}
          type={textboxValue.pwd}
          id={textboxValue.pwdConfirm}
          name={textboxValue.pwdConfirm}
          placeholder={`Re-enter your ${textboxValue.pwd}`}
          iconClass={icon.lock}
        />

        <LoginButton className={styles.signupButton} name="Signup" />
      </form>
    </>
  );
}
