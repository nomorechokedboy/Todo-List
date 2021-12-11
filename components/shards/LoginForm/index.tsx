import LoginTextBox from "../LoginTextBox";
import LoginButton from "../LoginButton";
import SuccessPopup from "../SuccessPopup";
import { useEffect, useMemo, useState } from "react";
import { setLoginUser } from "../../../redux/loginUser/action";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { loginStatus } from "../../../lib/api/user";
import styles from "./loginForm.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormInput {
  email: string;
  password: string;
  checked?: boolean;
}

export default function LoginForm() {
  const dispatch = useDispatch();
  const router = useRouter();

  const { register, handleSubmit } = useForm<FormInput>();

  useEffect(() => {
    router.replace("/login", undefined, { shallow: true });
  }, []);

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

    const [token, error] = await loginStatus(data);

    if (token) {
      dispatch(
        setLoginUser({
          token,
          setLocal: data[textbox.checked],
        })
      );

      setSuccess(true);

      setTimeout(() => {
        router.push("/todomain", undefined, { shallow: true });
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
