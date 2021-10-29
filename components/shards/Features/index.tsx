import React from "react";
import styles from "./features.module.css";

import FeaturesLeft from "../FeaturesLeft";
import FeaturesRight from "../FeaturesRight";

const Features = () => {
  return (
    <section className={styles.container}>
      <FeaturesLeft />
      <FeaturesRight />
    </section>
  );
};

export default Features;
