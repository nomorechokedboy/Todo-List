import React from "react";
import styles from "./icon.module.scss";

interface IIconProps {
  className?: string;
  iconName: string;
  handleClick?: React.MouseEventHandler;
}

export default function Icon({ className, iconName, handleClick }: IIconProps) {
  return (
    <div className={`${styles.icon} ${className ?? ""}`} onClick={handleClick}>
      <i className={`fas fa-${iconName}`}></i>
    </div>
  );
}
