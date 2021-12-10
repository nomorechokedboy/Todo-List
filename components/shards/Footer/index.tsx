import React from "react";
import Media from "../Media";
import SubNav from "../SubNav";
import Contact from "../Contact";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer id="about" className={styles.container}>
      <Media />
      <SubNav />
      <Contact />
    </footer>
  );
};

export default Footer;
