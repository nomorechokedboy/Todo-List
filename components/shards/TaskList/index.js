import React from "react";
import styles from "./taskList.module.css";
import Task from "../Task";
import TaskListTitle from "../TaskListTitle";

export default function TaskList() {
  return (
    <div className={styles.container}>
      <TaskListTitle />
      <div className={styles.tasks}>
        {Array.from(Array(5)).map((el, i) => (
          <Task key={i} />
        ))}
      </div>
    </div>
  );
}
