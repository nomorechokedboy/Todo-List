import React from "react";
import styles from "./todoMainPage.module.css";
import MainHeader from "../shards/MainHeader";
import TaskList from "../shards/TaskList";

export default function TodoMainPage() {
  return (
    <div className={styles.container}>
      <MainHeader />
      <TaskList />
      <TaskList />
    </div>
  );
}
