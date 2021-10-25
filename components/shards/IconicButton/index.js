import React from "react";
import styles from "./iconicButton.module.css";

export default function IconicButton({
  buttonName,
  buttonStyle,
  iconName,
  iconStyle,
  handleClick,
}) {
  return (
    <div className={styles.container} onClick={handleClick}>
      <i className={`fas fa-${iconName}`} style={iconStyle}></i>
      <div className={styles.descript} style={buttonStyle}>
        {buttonName}
      </div>
    </div>
  );
}
