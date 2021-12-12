import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import styles from "./media.module.scss";

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
  <a href={data.href} target="_blank" rel="noreferrer" className={styles.icon}>
    <i className={`fab fa-${data.icon} fa-2x`}></i>
  </a>
);

export default function Media() {
  return (
    <section className={styles.container}>
      <div className={styles.logo}>
        <Image src={logo} alt="StikiNote logo" width={56} height={56} />
      </div>
      <div className={styles.mobileRightWrapper}>
        <p className={styles.descript}>
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
