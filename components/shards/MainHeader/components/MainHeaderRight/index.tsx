import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import IconWrapper from "../../../IconWrapper";
import Icon from "../../../Icon";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setShowForm } from "../../../../../redux/showForm/action";
import {
  setLoginUser,
  selectLoginUser,
} from "../../../../../redux/loginUser/action";

export default function MainHeaderRight() {
  const dispatch = useDispatch();
  const router = useRouter();
  const payload = useSelector(selectLoginUser);

  const showForm = React.useCallback(() => {
    dispatch(setShowForm(true));
  }, [dispatch]);

  const handleSignoutClick = React.useCallback(() => {
    // remove user from localStorage
    payload.setLocal && localStorage.clear();

    dispatch(setLoginUser({ token: null, setLocal: false }));

    // return to homepage
    router.replace("/");
  }, [dispatch]);

  return (
    <section className={styles.right}>
      <IconWrapper>
        <Icon iconName="plus" handleClick={showForm} />
        <Icon iconName="bell" handleClick={() => console.log("I am bell")} />
        <Icon iconName="cog" handleClick={() => console.log("I am cog")} />
        {payload.token && (
          <Icon iconName="sign-out-alt" handleClick={handleSignoutClick} />
        )}
      </IconWrapper>
    </section>
  );
}
