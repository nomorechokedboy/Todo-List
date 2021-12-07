import React from "react";
import styles from "./styles.module.css";
import IconWrapper from "../../../IconWrapper";
import Icon from "../../../Icon";
import { useDispatch } from "react-redux";
import { setShowForm } from "../../../../../redux/showForm/action";

export default function MainHeaderRight() {
  const dispatch = useDispatch();

  const showForm = React.useCallback(() => {
    dispatch(setShowForm(true));
  }, []);

  return (
    <section className={styles.right}>
      <IconWrapper>
        <Icon iconName="plus" handleClick={showForm}></Icon>
        <Icon
          iconName="bell"
          handleClick={() => console.log("I am bell")}
        ></Icon>
        <Icon iconName="cog" handleClick={() => console.log("I am cog")}></Icon>
      </IconWrapper>
    </section>
  );
}
