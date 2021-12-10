import React from "react";
import styles from "./contact.module.scss";

export default function Contact() {
  return (
    <section className={styles.container}>
      <div className={styles.contactTitle}>Contact us</div>
      <p className={styles.descript}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
        magnam, ad in maiores magni provident, vel laudantium eligendi amet
        sequi fuga delectus vitae iusto! Culpa minima quibusdam nisi itaque
        ipsam?
      </p>
      <div className={styles.inputWrapper}>
        <input className={styles.input} />
        <button className={styles.contactButton}>
          <i className="fas fa-paper-plane"></i>
        </button>
      </div>
    </section>
  );
}
