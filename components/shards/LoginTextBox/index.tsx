import styles from "./loginTextBox.module.css";

interface ILoginTextBoxProps {
  id: string;
  type: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  iconClass: string;
  label: string;
  className: string;
  name: string;
}

export default function LoginTextBox({
  id,
  className,
  iconClass,
  label,
  ...inputProps
}: ILoginTextBoxProps) {
  return (
    <>
      <div className={className}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        <div className={styles.textBox}>
          <i className={iconClass}></i>
          <input id={id} className={styles.input} {...inputProps} />
        </div>
      </div>
    </>
  );
}
