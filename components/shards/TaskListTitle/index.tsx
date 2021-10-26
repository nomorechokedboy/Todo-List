import React from "react";
import styles from "./taskListTitle.module.css";
import IconWrapper from "../IconWrapper";
import Icon from "../Icon";

export default function TaskListTitle() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Date/month/year</div>
      <IconWrapper>
        <Icon
          iconName="chevron-down"
          handleClick={() => console.log("Chevron-down clicked")}
        ></Icon>
        <Icon
          iconName="ellipsis-v"
          handleClick={() => console.log("Ellipsis-v clicked")}
        ></Icon>
      </IconWrapper>
    </div>
  );
}
