import LoginTextBox from "../LoginTextBox";
import LoginButton from "../LoginButton";
import SuccessPopup from "../SuccessPopup";
import { useMemo, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setIsSignup } from "../../../redux/signupState/action";
import { signupStatus } from "../../../lib/api/user";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./styles.module.scss";

interface FormInput {
  fullname: string;
  email: string;
  password: string;
  rePassword: string;
}

export default function SignupForm() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm<FormInput>();

  if (router.asPath === "/login") {
    router.replace("/login", "/signup");
  }

  const [notification, setNotification] = useState("");
  const [success, setSuccess] = useState(false);

  const textbox = useMemo(() => {
    return {
      fullname: "fullname",
      email: "email",
      pwd: "password",
      pwdConfirm: "verify-password",
      pwdPattern: "^(?=.*[a-zA-z])(?=.*\\d)([^\\s]){8,}$",
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
  ): Promise<void> => {
    const target = event.target;

    setNotification("Waiting..."); // wait for validation
    const [token, error] = await signupStatus({
      ...data,
      rePassword: data[textbox.pwdConfirm],
    });

    if (token) {
      setSuccess(true);

      setTimeout(() => {
        dispatch(setIsSignup(false));
        router.replace("/login");
      }, 1000);
    } else {
      setNotification(error);

      target[textbox.pwd].value = "";
      target[textbox.pwdConfirm].value = "";
    }
  };

  const handlePwdInvalid = (event: React.InvalidEvent<HTMLInputElement>) => {
    event.currentTarget.setCustomValidity(
      "Password length must be 8 and contain at least 1 number"
    );
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.currentTarget.setCustomValidity("");
    setNotification("");
  };

  return (
    <>
      {success && <SuccessPopup name="Signup" />}
      <div className={styles.errorNoti}>{notification}</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <LoginTextBox
          register={register}
          label={textbox.fullname}
          type="text"
          name={textbox.fullname}
          id={textbox.fullname}
          placeholder={`Enter your ${textbox.fullname}`}
          iconClass={icon.info}
          onChange={handleOnChange}
        />

        <LoginTextBox
          register={register}
          label={textbox.email}
          type={textbox.email}
          name={textbox.email}
          id={textbox.email}
          placeholder={`Enter your ${textbox.email}`}
          onChange={handleOnChange}
          iconClass={icon.user}
        />

        <LoginTextBox
          register={register}
          label={textbox.pwd}
          type={textbox.pwd}
          name={textbox.pwd}
          id={textbox.pwd}
          placeholder={`Enter your ${textbox.pwd}`}
          iconClass={icon.lock}
          onInvalid={handlePwdInvalid}
          onChange={handleOnChange}
          pattern={textbox.pwdPattern}
        />

        <LoginTextBox
          register={register}
          label={textbox.pwdConfirm}
          type={textbox.pwd}
          id={textbox.pwdConfirm}
          name={textbox.pwdConfirm}
          placeholder={`Re-enter your ${textbox.pwd}`}
          onChange={handleOnChange}
          iconClass={icon.lock}
        />

        <LoginButton className={styles.signupButton} name="Signup" />
      </form>
    </>
  );
}
