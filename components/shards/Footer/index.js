import React from "react";
import styles from "./footer.module.css";

import Media from "../Media";
import SubNav from "../SubNav";
import Contact from "../Contact";

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
