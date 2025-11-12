import React from 'react';
import Image from 'next/image';
import styles from './AchievementsSection.module.scss';

const AchievementsSection = () => {
  return (
    <section className={styles.achievementsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>導入実績</h2>

        <div className={styles.mainStats}>
          <p className={styles.statsNumber}>
            <span className={styles.statsLabel}>導入実績</span>
            <span className={styles.number}>15,000</span>
            <span className={styles.unit}>名以上</span>
          </p>
          <p className={styles.statsDescription}>結果が出るリスキリング研修</p>
        </div>

        <div className={styles.badgeContainer}>
          <Image
            src="/images/導入実績.png"
            alt="導入実績 - 満足度95%以上、導入企業数100社超"
            width={800}
            height={200}
            className={styles.achievementImage}
          />
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
