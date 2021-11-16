import React from 'react';
import styles from './RatingStar.scss';

const RatingStar = ({ ratio, className }) => {
  return (
    <section className={`${className} ${styles['star']}`}>
      <span
        className={styles['star__back']}
        style={{ width: `${ratio}px` }}
      ></span>
    </section>
  );
};

export default RatingStar;
