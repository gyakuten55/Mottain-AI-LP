'use client';

import styles from './ContactButtonsSection.module.scss';

export default function ContactButtonsSection() {
  return (
    <section className={styles.contactButtonsSection}>
      <div className={styles.container}>
        <div className={styles.buttonGroup}>
          <button className={styles.documentButton}>
            資料請求
          </button>
          <button className={styles.consultationButton}>
            無料相談
          </button>
        </div>
      </div>
    </section>
  );
}
