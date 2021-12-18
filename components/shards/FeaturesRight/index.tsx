import Image from "next/image";
import features from "../../../public/features.jpg";
import styles from "./featuresRight.module.scss";

const FeaturesRight = () => {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <Image src={features} alt="Banner Image" />
      </div>
    </div>
  );
};

export default FeaturesRight;
