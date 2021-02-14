import React from "react";

import styles from "./hero.module.css";

function Hero({ img, heading, description, children }) {
  return (
    <div className={styles.hero}>
      {img && <img src={img} className={styles.heroImg} alt="hero-banner" />}
      <div className={styles.heroCaption}>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.description}>{description}</p>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Hero;
