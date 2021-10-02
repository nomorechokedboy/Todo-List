import React from "react";
import styles from "./mainHeader.module.css";

const iconData = [
  {
    iconName: "plus",
    handleClick: () => {
      console.log("I am plus");
    },
  },
  {
    iconName: "bell",
    handleClick: () => {
      console.log("I am bell");
    },
  },
  {
    iconName: "cog",
    handleClick: () => {
      console.log("I am cog");
    },
  },
];

const Icon = ({ iconName, handleClick }) => {
  return (
    <div className={styles.icon} onClick={handleClick}>
      <i className={`fas fa-${iconName}`}></i>
    </div>
  );
};

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
      <section className={styles.right}>
        <div className={styles.iconWrapper}>
          {iconData.map((el) => (
            <Icon {...el} key={el.iconName} />
          ))}
        </div>
      </section>
    </header>
  );
}
