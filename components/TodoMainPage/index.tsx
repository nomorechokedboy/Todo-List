import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectLoginUser } from "../../redux/loginUser/action";
import Categories from "../shards/Categories";
import Footer from "../shards/Footer";
import MainHeader from "../shards/MainHeader";
import TaskForm from "../shards/TaskForm";
import TaskList from "../shards/TaskList";
import { setIsSignup } from "../../redux/isSignup/action";
import { useDispatch } from "react-redux";
import styles from "./styles.module.scss";

export default function TodoMainPage() {
  const dispatch = useDispatch();
  const loginUser = useSelector(selectLoginUser);

  const handleSignupClick = React.useCallback(() => {
    dispatch(setIsSignup(true));
  }, [dispatch]);

  const handleSigninClick = React.useCallback(() => {
    dispatch(setIsSignup(false));
  }, [dispatch]);

  return (
    <>
      <MainHeader />
      {loginUser.token ? (
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
      ) : (
        <>
          <div className={styles.redirectNonUser}>
            Please
            <Link href="/login">
              <a onClick={handleSigninClick} className={styles.login}>
                &nbsp;login&nbsp;
              </a>
            </Link>{" "}
            or
            <Link href="/login" as="/signup">
              <a onClick={handleSignupClick} className={styles.signup}>
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
