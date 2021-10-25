import React from "react";
import styles from "./taskList.module.css";
import Task from "../Task";
import TaskListTitle from "../TaskListTitle";
import IconicButton from "../IconicButton";

export default function TaskList() {
  return (
    <div className={styles.container}>
      <TaskListTitle />
      <div className={styles.tasks}>
        {Array.from(Array(5)).map((el, i) => (
          <Task key={i} />
        ))}
        <div className={styles.addButton}>
          <IconicButton
            buttonName="Add task"
            buttonStyle={{ color: "#666" }}
            iconName="plus"
            iconStyle={{ color: "red" }}
            handleClick={() => console.log("Add task clicked")}
          />
        </div>
      </div>
    </div>
  );
}
