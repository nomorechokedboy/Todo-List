import React from "react";
import Image from "next/image";
import styles from "./featuresRight.module.scss";

const FeaturesRight = () => {
  return (
    <div className={styles.container}>
      <img src="/features.jpg" alt="Banner Image" className={styles.banner} />
      {/* <div></div> */}
    </div>
  );
};

export default FeaturesRight;
