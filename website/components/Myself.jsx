// Myself.jsx
import React from 'react';
import styles from './Myself.module.css'; // Import the CSS module

const Myself = () => {
  return (
    <div className={styles["full-screen-div"]} style={{ backgroundColor: 'lightblue' }}>
            <div className={styles.leftdiv}></div>
            <div className={styles.rightdiv}></div>
    </div>
  );
}

export default Myself;
