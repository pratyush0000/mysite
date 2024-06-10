import React from 'react';
import styles from './Myself.module.css'; // Import the CSS module
import myPhoto from '../assets/me.png'; // Import your photo

const Myself = () => {
  return (
    <div className={styles["full-screen-div"]}>
      <img src={myPhoto} className={styles.myPhoto} alt="My Photo" />
        <div className={styles.leftdiv}>
            <div className={styles.titlehome}>
                Frontend<br/>
                Dev/Des.
            </div>
            <div className={styles.subtexthome}>
                I blend creativity with precision in crafting seamless user interactions.
            </div>
        </div>
        <div className={styles.rightdiv}></div>
    </div>
  );
}

export default Myself;
