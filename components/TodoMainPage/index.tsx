import React from "react";
import styles from "./todoMainPage.module.css";
import MainHeader from "../shards/MainHeader";
import TaskList from "../shards/TaskList";
import Categories from "../shards/Categories";

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
          <TaskList />
        </main>
      </div>
    </>
  );
}
