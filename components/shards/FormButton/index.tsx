import React from "react";
import styles from "./styles.module.scss";

interface FormButtonProps {
  label: string;
  handleClick: React.MouseEventHandler;
}

function FormButton({ label, handleClick }: FormButtonProps) {
  return (
    <div className={styles.formBtn} onClick={handleClick}>
      {label}
    </div>
  );
}

export default React.memo(FormButton);
