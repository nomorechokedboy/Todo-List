import React from "react";
import styles from "./featuresLeft.module.css";

import Slogan from "../Slogan";

const content = [
    "Lorem assumenda molestias commodi est rem. Molestiae et porro non magnam facere temporibus? Ratione maxime dolorum recusandae eum totam, quia Dolorem esse reiciendis tempore delectus aliquam? Fugit alias vitae cum!",
    "Lorem assumenda molestias commodi est rem. Molestiae et porro non magnam facere temporibus? Ratione maxime dolorum recusandae eum totam, quia Dolorem esse reiciendis tempore delectus aliquam? Fugit alias vitae cum!",
];

const FeaturesDescript = ({ content }) => <p className={styles.descript}>{content}</p>;

const FeaturesLeft = (props) => {
    return (
        <div className={styles.container}>
            <Slogan />
            {content.map((el, i) => (
                <FeaturesDescript content={content} key={i} />
            ))}
        </div>
    );
};

export default FeaturesLeft;
