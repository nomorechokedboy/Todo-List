import React from "react";
import styles from "./iconicButton.module.css";

interface IProps {
  buttonName: string;
  buttonStyle: Object;
  iconName: string;
  iconStyle?: Object;
  handleClick: () => void;
}
export default function IconicButton({
  buttonName,
  buttonStyle,
  iconName,
  iconStyle,
  handleClick,
}: IProps) {
  return (
    <div className={styles.container} onClick={handleClick}>
      <i className={`fas fa-${iconName}`} style={iconStyle}></i>
      <div className={styles.descript} style={buttonStyle}>
        {buttonName}
      </div>
    </div>
  );
}
