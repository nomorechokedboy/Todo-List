import React from "react";
import styles from "./styles.module.scss";

interface FormButtonProps {
  label: string;
  handleClick: React.MouseEventHandler;
}

export default React.memo(({ label, handleClick }: FormButtonProps) => {
  return (
    <div className={styles.formBtn} onClick={handleClick}>
      {label}
    </div>
  );
});
