import React from "react";
import styles from "./taskListTitle.module.css";
import IconWrapper from "../IconWrapper";
import Icon from "../Icon";

export default function TaskListTitle() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Date/month/year</div>
      <IconWrapper>
        <Icon>
          <i class="fas fa-chevron-down"></i>
        </Icon>
        <Icon>
          <i class="fas fa-ellipsis-v"></i>
        </Icon>
      </IconWrapper>
    </div>
  );
}
