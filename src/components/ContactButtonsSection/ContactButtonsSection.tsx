'use client';

import styles from './ContactButtonsSection.module.scss';

export default function ContactButtonsSection() {
  return (
    <section className={styles.contactButtonsSection}>
      <div className={styles.container}>
        <div className={styles.buttonGroup}>
          <button
            className={styles.documentButton}
            onClick={() => alert('準備中です')}
          >
            資料請求
          </button>
          <a href="mailto:info@meta-heroes.io" className={styles.consultationButton}>
            無料相談
          </a>
        </div>
      </div>
    </section>
  );
}
