import React from "react";
import styles from "./styles.module.css";

function Hero({ minihero }) {
  return (
    <div className={minihero ? styles.heroSm : styles.hero}>
      <div>
        <h1>Premium Property Finder</h1>
        <p>Bringing premium property right to your fingertips</p>
      </div>
    </div>
  );
}

export default Hero;
