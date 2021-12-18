import styles from "./styles.module.scss";

interface LoginPopupProps {
  text: string;
  success: boolean;
}

export default function SuccessPopup({ success, text }: LoginPopupProps) {
  return (
    <div className={styles.layout}>
      <div className={styles.popup}>
        <div className={success ? styles.tickMark : styles.loader}></div>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
}
