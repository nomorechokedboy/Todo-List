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
  onChange,
  type,
  iconClass,
  label,
  placeholder,
  className,
  name,
}: ILoginTextBoxProps) {
  return (
    <>
      <div className={className}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        <div className={styles.textBox}>
          <i className={iconClass}></i>
          <input
            onChange={onChange}
            id={id}
            name={name}
            className={styles.input}
            placeholder={placeholder}
            type={type}
          />
        </div>
      </div>
    </>
  );
}
