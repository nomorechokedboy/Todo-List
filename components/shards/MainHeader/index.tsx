import React from "react";
import styles from "./mainHeader.module.css";
import IconWrapper from "../IconWrapper";
import Icon from "../Icon";

export default function MainHeader() {
  return (
    <header className={styles.container}>
      <section className={styles.left}>
        <img
          className={styles.headerLogo}
          src="/logo.png"
          alt="StikiNote logo"
        />
        <div className={styles.username}>Stikinote</div>
        <div className={styles.menuButton}>
          <i className="fas fa-bars"></i>
        </div>
      </section>
      <section className={styles.middle}>
        <input className={styles.searchBar} placeholder="Type to search..." />
        <i className="fas fa-search"></i>
      </section>
      <div className={styles.right}>
        <IconWrapper>
          <Icon
            iconName="plus"
            handleClick={() => console.log("I am plus")}
          ></Icon>
          <Icon
            iconName="bell"
            handleClick={() => console.log("I am bell")}
          ></Icon>
          <Icon
            iconName="cog"
            handleClick={() => console.log("I am cog")}
          ></Icon>
        </IconWrapper>
      </div>
    </header>
  );
}
