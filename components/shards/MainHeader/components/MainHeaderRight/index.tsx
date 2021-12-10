import React from "react";
import styles from "./styles.module.scss";
import IconWrapper from "../../../IconWrapper";
import Icon from "../../../Icon";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setShowForm } from "../../../../../redux/showForm/action";
import { setAuth, selectAuth } from "../../../../../redux/auth/action";

export default function MainHeaderRight() {
  const dispatch = useDispatch();
  const router = useRouter();
  const token = useSelector(selectAuth);

  const showForm = React.useCallback(() => {
    dispatch(setShowForm(true));
  }, [dispatch]);

  const handleSignoutClick = () => {
    // remove user from localStorage
    localStorage.clear();

    dispatch(setAuth(null));

    // return to homepage
    router.replace("/");
  };

  return (
    <section className={styles.right}>
      <IconWrapper>
        <Icon iconName="plus" handleClick={showForm} />
        <Icon iconName="bell" handleClick={() => console.log("I am bell")} />
        <Icon iconName="cog" handleClick={() => console.log("I am cog")} />
        {token && (
          <Icon iconName="sign-out-alt" handleClick={handleSignoutClick} />
        )}
      </IconWrapper>
    </section>
  );
}
