import React from "react";
import styles from "./media.module.css";

const data = [
  {
    href: "https://github.com/nomorechokedboy/stikinote-frontend",
    icon: "facebook",
  },
  {
    href: "https://github.com/nomorechokedboy/stikinote-frontend",
    icon: "github",
  },
  {
    href: "https://github.com/nomorechokedboy/stikinote-frontend",
    icon: "twitter",
  },
  {
    href: "https://github.com/nomorechokedboy/stikinote-frontend",
    icon: "instagram",
  },
];

const MediaIcon = ({ data }) => (
  <a href={data.href} target="_blank" className={styles.icon}>
    <i className={`fab fa-${data.icon} fa-2x`}></i>
  </a>
);

export default function Media() {
  return (
    <section className={styles.container}>
      <img className={styles.logo} src="/logo.png" alt="StikiNote logo" />
      <div className={styles.mobileRightWrapper}>
        <p className={styles.descript}>
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          distinctio odio nostrum porro sit impedit blanditiis culpa aperiam
          possimus molestiae, omnis velit modi dolores aliquid praesentium
          voluptatem maxime in fugit. */}
          Join our community and explore the rabbit hole
        </p>
        <div className={styles.mediaIcons}>
          {data.map((el) => (
            <MediaIcon data={el} key={el.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
