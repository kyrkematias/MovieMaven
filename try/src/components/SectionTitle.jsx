import React from "react";
import styles from "../assets/styles/moviecard.module.css";

function SectionTitle({ text }) {
  return (
    <div>
      <h2 className={styles.sectionName}>{text}</h2>
    </div>
  );
}

export default SectionTitle;
