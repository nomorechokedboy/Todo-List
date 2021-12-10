import React from "react";
import styles from "./features.module.scss";

import FeaturesLeft from "../FeaturesLeft";
import FeaturesRight from "../FeaturesRight";

const Features = () => {
  return (
    <section id="features" className={styles.container}>
      <FeaturesLeft />
      <FeaturesRight />
    </section>
  );
};

export default Features;
