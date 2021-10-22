import React from "react";
import Media from "../Media";
import SubNav from "../SubNav";
import Contact from "../Contact";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <Media />
      <SubNav />
      <Contact />
    </footer>
  );
};

export default Footer;
