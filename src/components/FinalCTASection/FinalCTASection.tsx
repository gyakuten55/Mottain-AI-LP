'use client';

import styles from './FinalCTASection.module.scss';

export default function FinalCTASection() {
  return (
    <section className={styles.finalCTASection}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>
          &quot;モッタイナイ&quot;をなくすAI活用！
        </h2>
        <p className={styles.subtitle}>
          あなたの会社の収益を最大化するための<br />
          プログラムをご提案します！
        </p>
      </div>
    </section>
  );
}
