import React from "react";
import Image from "next/image";
import styles from "./featuresRight.module.css";

const FeaturesRight = (props) => {
  return (
    <div className={styles.container}>
      <img src="/features.jpg" alt="Banner Image" className={styles.banner} />
    </div>
  );
};

export default FeaturesRight;
