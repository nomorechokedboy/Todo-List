import LoginTextBox from "../LoginTextBox";
import LoginButton from "../LoginButton";
import SuccessPopup from "../SuccessPopup";
import { useMemo, useState } from "react";
import { setAuth } from "../../../redux/auth/action";
import { setLoginUser } from "../../../redux/loginUser/action";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { loginStatus } from "../../../pages/api/getUser";
import styles from "./loginForm.module.css";
import { useForm, SubmitHandler } from "react-hook-form";

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

// interface UserInputElement extends HTMLInputElement {
//   password: HTMLInputElement;
// }

interface FormInput {
  email: string;
  password: string;
  checked?: boolean;
}

export default function LoginForm() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm<FormInput>();

  if (router.asPath === "/signup") {
    router.replace("/login");
  }

  const [success, setSuccess] = useState(false);
  const [notification, setNotification] = useState("");

  const textbox = useMemo(() => {
    return {
      email: "email",
      pwd: "password",
      checked: "checked",
    };
  }, []);

  const icon = useMemo(() => {
    return {
      info: "fas fa-user-edit fa-2x",
      user: "fas fa-user-circle fa-2x",
      lock: "fas fa-lock fa-2x",
    };
  }, []);

  const onSubmit: SubmitHandler<FormInput> = async (
    data: FormInput,
    event: React.BaseSyntheticEvent
  ) => {
    setNotification("Waiting..."); // wait for validation
    console.log({ loginstatus: await loginStatus(data) });

    const [token, error] = await loginStatus(data);

    if (token) {
      // remember me
      if (data[textbox.checked]) {
        dispatch(setAuth(token));

        const ttl = 604_800_000; // 7 days
        setStorageWithExpiry("token", token, ttl);
      }

      dispatch(setLoginUser(token));
      setSuccess(true);

      setTimeout(() => {
        router.push("/todomain");
      }, 1000);
    } else {
      setNotification(error);

      const target = event.target;
      target[textbox.pwd].value = "";
    }
  };

  const handleOnChange = (_event: React.ChangeEvent<HTMLInputElement>) => {
    setNotification("");
  };

  return (
    <>
      {success && <SuccessPopup name="Login" />}
      <div className={styles.errorNoti}>{notification}</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <LoginTextBox
          register={register}
          label={textbox.email}
          name={textbox.email}
          id={textbox.email}
          type={textbox.email}
          placeholder={`Enter your ${textbox.email}`}
          onChange={handleOnChange}
          iconClass={icon.user}
        />

        <LoginTextBox
          register={register}
          label={textbox.pwd}
          name={textbox.pwd}
          id={textbox.pwd}
          type={textbox.pwd}
          placeholder={`Enter your ${textbox.pwd}`}
          onChange={handleOnChange}
          iconClass={icon.lock}
        />

        <div className={styles.checkboxContainer}>
          <input
            {...register("checked")}
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
