import React from "react";
import Image from "next/image";
import styles from "./featuresRight.module.css";

const FeaturesRight = () => {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <Image src="/features.jpg" alt="Banner Image" />
      </div>
    </div>
  );
};

export default FeaturesRight;
