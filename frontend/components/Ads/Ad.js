import React from 'react';
import styles from '../../styles/Ad.module.css';

export default function Ad({ Ad }) {
  const { title } = Ad;
  return (
    <div>
      <div className={styles.ad}>
        <div className={styles.title}>{title}</div>
      </div>
    </div>
  );
}
