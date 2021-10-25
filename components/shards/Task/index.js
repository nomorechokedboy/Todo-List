import React from "react";
import Icon from "../Icon";
import IconWrapper from "../IconWrapper";
import styles from "./task.module.css";

export default function Task() {
  return (
    <div className={styles.container}>
      <div className={styles.taskWrapper}>
        <div className={styles.checkbox}></div>
        <span className={styles.todoTitle}>Hom nay phai quet nha</span>
      </div>
      <div className={styles.rightside}>
        <IconWrapper>
          <div>Work</div>
          <Icon handleClick={() => console.log("Book open clicked")}>
            <i class="fas fa-book-open"></i>
          </Icon>
          <Icon handleClick={() => console.log("Ellipsis-h clicked")}>
            <i class="fas fa-ellipsis-h"></i>
          </Icon>
        </IconWrapper>
      </div>
    </div>
  );
}
