import React from "react";
import styles from "./styles.module.css";
import IconWrapper from "../../../IconWrapper";
import Icon from "../../../Icon";

export default function MainHeaderRight() {
  return (
    <section className={styles.right}>
      <IconWrapper>
        <Icon
          iconName="plus"
          handleClick={() => console.log("I am plus")}
        ></Icon>
        <Icon
          iconName="bell"
          handleClick={() => console.log("I am bell")}
        ></Icon>
        <Icon iconName="cog" handleClick={() => console.log("I am cog")}></Icon>
      </IconWrapper>
    </section>
  );
}
