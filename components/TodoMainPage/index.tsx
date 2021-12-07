import React from "react";
import Categories from "../shards/Categories";
import MainHeader from "../shards/MainHeader";
import TaskForm from "../shards/TaskForm";
import TaskList from "../shards/TaskList";
import styles from "./todoMainPage.module.css";

export default function TodoMainPage() {
  return (
    <>
      <MainHeader />
      <div className={styles.container}>
        <aside className={styles.sidebar}>
          <Categories />
        </aside>
        <main className={styles.pageContent}>
          <TaskList />
          <TaskForm />
        </main>
      </div>
    </>
  );
}
