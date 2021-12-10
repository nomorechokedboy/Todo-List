import Link from "next/link";
import React from "react";
import styles from "./startedButton.module.scss";

export default function StartedButton() {
  return (
    <div className={styles.startedButton}>
      <Link href="/login">
        <a>Get started</a>
      </Link>
    </div>
  );
}
