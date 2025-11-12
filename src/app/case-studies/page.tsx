'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import styles from './page.module.scss';

// 導入事例のデータ型
interface CaseStudy {
  id: string;
  companyName: string;
  employeeCount: number;
  challenges: string[];
  beforeValue: string;
  afterValue: string;
  savingsAmount: string;
  savingsPeriod: string;
}

// 導入事例データ
const caseStudies: CaseStudy[] = [
  {
    id: 's-company',
    companyName: 'S社',
    employeeCount: 70,
    challenges: [
      'AIを使える人材を増やしたい',
      '部門リーダーに伴走型AIコンサルティング（AI-OJT）',
      'アクセス解析における外部コンサルを内製化',
      '約2,000万の開発予算を見込んでいたプロジェクトが既存サービスで実現可能に'
    ],
    beforeValue: '外注化',
    afterValue: '判断',
    savingsAmount: '3,080万円',
    savingsPeriod: '3年間'
  },
  {
    id: 't-company',
    companyName: 'T社',
    employeeCount: 150,
    challenges: [
      'データ分析業務の属人化を解消したい',
      'マーケティング部門のデータリテラシー向上',
      'BIツール導入による可視化の推進',
      '外部コンサルに頼らない自走可能な組織づくり'
    ],
    beforeValue: '外注化',
    afterValue: '判断',
    savingsAmount: '4,500万円',
    savingsPeriod: '3年間'
  },
  {
    id: 'u-company',
    companyName: 'U社',
    employeeCount: 200,
    challenges: [
      'AI活用の社内教育体制を構築したい',
      '全社員のDXリテラシー向上を実現',
      '業務効率化のためのAIツール導入支援',
      '年間1,500万円のシステム開発費を削減'
    ],
    beforeValue: '外注化',
    afterValue: '判断',
    savingsAmount: '5,200万円',
    savingsPeriod: '3年間'
  },
  {
    id: 'v-company',
    companyName: 'V社',
    employeeCount: 95,
    challenges: [
      'カスタマーサポート業務の効率化',
      'AI chatbotによる問い合わせ対応の自動化',
      '人的リソースをコア業務にシフト',
      '月間300時間の工数削減を実現'
    ],
    beforeValue: '外注化',
    afterValue: '判断',
    savingsAmount: '2,800万円',
    savingsPeriod: '3年間'
  }
];

export default function CaseStudiesPage() {
  return (
    <div className={styles.pageContainer}>
      <section className={styles.caseStudiesSection}>
        <div className={styles.container}>
          {/* タイトル */}
          <h1 className={styles.sectionTitle}>導入事例</h1>

          {/* カルーセル */}
          <div className={styles.carouselWrapper}>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={50}
              slidesPerView={1}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              pagination={{
                el: '.swiper-pagination-custom',
                clickable: true,
              }}
              loop={true}
              className={styles.swiper}
            >
              {caseStudies.map((study) => (
                <SwiperSlide key={study.id}>
                  <div className={styles.caseCard}>
                    {/* 会社情報 */}
                    <div className={styles.companyInfo}>
                      <h2 className={styles.companyName}>{study.companyName}</h2>
                      <p className={styles.employeeCount}>社員数：{study.employeeCount}名</p>
                    </div>

                    {/* 課題リスト */}
                    <div className={styles.challengesList}>
                      {study.challenges.map((challenge, index) => (
                        <div key={index} className={styles.challengeItem}>
                          <span className={styles.challengeBadge}>課題</span>
                          <p className={styles.challengeText}>{challenge}</p>
                        </div>
                      ))}
                    </div>

                    {/* 効果表示 */}
                    <div className={styles.effectSection}>
                      <div className={styles.comparisonBars}>
                        <div className={styles.barRow}>
                          <span className={styles.barLabel}>導入前</span>
                          <div className={styles.barContainer}>
                            <div className={`${styles.bar} ${styles.barBefore}`}></div>
                          </div>
                        </div>
                        <div className={styles.barRow}>
                          <span className={styles.barLabel}>導入後</span>
                          <div className={styles.barContainer}>
                            <div className={`${styles.bar} ${styles.barAfter}`}></div>
                          </div>
                        </div>
                      </div>

                      <div className={styles.savingsDisplay}>
                        <p className={styles.savingsPeriod}>{study.savingsPeriod}で経費を</p>
                        <p className={styles.savingsAmount}>{study.savingsAmount}削減</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* カスタムナビゲーションボタン */}
            <div className={`${styles.navButton} ${styles.navPrev} swiper-button-prev-custom`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className={`${styles.navButton} ${styles.navNext} swiper-button-next-custom`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* カスタムページネーション */}
            <div className={`${styles.pagination} swiper-pagination-custom`}></div>
          </div>
        </div>
      </section>
    </div>
  );
}
