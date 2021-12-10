import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/auth/action";
import Categories from "../shards/Categories";
import Footer from "../shards/Footer";
import MainHeader from "../shards/MainHeader";
import TaskForm from "../shards/TaskForm";
import TaskList from "../shards/TaskList";
import { setIsSignup } from "../../redux/signupState/action";
import { useDispatch } from "react-redux";
import styles from "./styles.module.scss";

export default function TodoMainPage() {
  const loginUser = useSelector(selectAuth);
  const dispatch = useDispatch();

  const HandleSignupClick = () => {
    dispatch(setIsSignup(true));
  };

  return (
    <>
      <MainHeader />
      {loginUser && (
        <>
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
      )}
      {!loginUser && (
        <>
          <div className={styles.redirectNonUser}>
            Please
            <Link href="/login">
              <a className={styles.login}>&nbsp;login&nbsp;</a>
            </Link>
            or
            <Link href="/login" as="/signup" replace>
              <a onClick={HandleSignupClick} className={styles.signup}>
                &nbsp;signup&nbsp;
              </a>
            </Link>
            to use our services
          </div>
          <Footer />
        </>
      )}
    </>
  );
}
