import React from "react";
import styles from "./DefaultPage.module.css";
import bgImage from "../src/assets/bgImage.png";
import lock from "../src/assets/lock.png";

export default function DefaultPage() {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <img src={bgImage} className={styles.image}/>
        <h1 className={styles.heading}>Pocket Notes</h1>
        <p className={styles.bodyText}>
          Send and receive messages without keeping your phone online. Use
          Pocket Notes on up to 4 linked devices and 1 mobile phone
        </p>
      </div>
      <div className={styles.footer}>
        <div>
          <img src={lock} />
        </div>
        <div className={styles.footText}>
          <p>end-to-end encrypted</p>
        </div>
      </div>
    </div>
  );
}
