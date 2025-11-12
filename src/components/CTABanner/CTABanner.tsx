import React from 'react';
import styles from './CTABanner.module.scss';

const CTABanner = () => {
  return (
    <section className={styles.ctaBanner}>
      <div className={styles.container}>
        <button className={styles.ctaButton}>
          助成金の相談をする
        </button>
      </div>
    </section>
  );
};

export default CTABanner;
