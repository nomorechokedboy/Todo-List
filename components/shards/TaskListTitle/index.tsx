import React from "react";
import Icon from "../Icon";
import IconWrapper from "../IconWrapper";
import styles from "./taskListTitle.module.scss";

export default function TaskListTitle() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Date/month/year</div>
      <IconWrapper>
        <Icon
          iconName="chevron-down"
          handleClick={() => console.log("Chevron-down clicked")}
        />
        <Icon
          iconName="ellipsis-v"
          handleClick={() => console.log("Ellipsis-v clicked")}
        />
      </IconWrapper>
    </div>
  );
}
