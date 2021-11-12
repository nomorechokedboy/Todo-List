import styles from "./styles.module.css";

interface SuccessPopupProps {
  name: string;
}

export default function SuccessPopup({ name }: SuccessPopupProps) {
  return (
    <div className={styles.layout}>
      <div className={styles.popup}>
        <div className={styles.tickMark}></div>
        <div className={styles.text}>{name} Successfully!</div>
      </div>
    </div>
  );
}
