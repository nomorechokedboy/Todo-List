import { useMemo, useState } from "react";
import styles from "./loginTextBox.module.css";

interface ILoginTextBoxProps {
  id: string;
  type: string;
  placeholder: string;
  iconClass: string;
  label: string;
  name: string;
  pwdShow?: boolean;
  pattern?: string;
  title?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onInvalid?: React.FormEventHandler<HTMLInputElement>;
  onInput?: React.FormEventHandler<HTMLInputElement>;
}

export default function LoginTextBox({
  iconClass,
  label,
  type,
  id,
  ...inputProps
}: ILoginTextBoxProps) {
  const [pwd, setPwd] = useState({
    show: false,
    type: "password",
  });

  const isPwd = type === "password";

  const handlePwdShowClick = () => {
    setPwd({
      show: !pwd.show,
      type: !pwd.show ? "text" : "password",
    });
  };

  const icon = useMemo(() => {
    return {
      openEyes: "fas fa-eye-slash fa-lg",
      closeEyes: "fas fa-eye fa-lg",
    };
  }, []);

  return (
    <>
      <div className={styles.inputContainer}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>

        <div className={styles.textBox}>
          <i className={iconClass}></i>
          <input
            className={styles.input}
            type={isPwd ? pwd.type : type}
            {...inputProps}
            required
          />

          {isPwd && (
            <div className={styles.pwdShow} onClick={handlePwdShowClick}>
              <i className={pwd.show ? icon.closeEyes : icon.openEyes} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
