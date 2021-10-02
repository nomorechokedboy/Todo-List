import React from "react";
import styles from "./subNav.module.css";

const data = [
  {
    link: "facebook.com",
    title: "Company",
  },
  {
    link: "facebook.com",
    title: "About us",
  },
  {
    link: "facebook.com",
    title: "Career",
  },
  {
    link: "facebook.com",
    title: "Support",
  },
];

const NavWrapper = () => (
  <div className={styles.subNavs}>
    {data.map((el) => (
      <div key={el.title} className={styles.subNav}>
        <a href={el.link}>{el.title}</a>
      </div>
    ))}
  </div>
);

export default function SubNav() {
  return (
    <section className={styles.container}>
      {Array.from(new Array(4)).map((el, i) => (
        <NavWrapper key={i} />
      ))}
    </section>
  );
}
