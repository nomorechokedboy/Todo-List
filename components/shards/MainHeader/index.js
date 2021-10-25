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
          <Icon handleClick={() => console.log("I am plus")}>
            <i className="fas fa-plus"></i>
          </Icon>
          <Icon handleClick={() => console.log("I am bell")}>
            <i className="fas fa-bell"></i>
          </Icon>
          <Icon handleClick={() => console.log("I am cog")}>
            <i className="fas fa-cog"></i>
          </Icon>
        </IconWrapper>
      </div>
    </header>
  );
}
