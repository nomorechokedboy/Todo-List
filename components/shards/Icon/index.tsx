import React from "react";
import styles from "./icon.module.css";

interface IIconProps {
  iconName: string;
  handleClick: React.MouseEventHandler;
}

export default function Icon({ iconName, handleClick }: IIconProps) {
  return (
    <div className={styles.icon} onClick={handleClick}>
      <i className={`fas fa-${iconName}`}></i>
    </div>
  );
}
