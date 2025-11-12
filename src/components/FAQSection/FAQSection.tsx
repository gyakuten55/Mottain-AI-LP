'use client';

import React, { useState } from 'react';
import styles from './FAQSection.module.scss';

// FAQのデータ型
interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// FAQデータ
const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    question: '初心者でも参加できますか？',
    answer: 'はい。AIに触れたことのない方でも、基礎から実践まで習得できます。'
  },
  {
    id: 'faq-2',
    question: '助成金の条件は？',
    answer: '雇用保険加入者であれば対象。条件確認もサポートします。'
  },
  {
    id: 'faq-3',
    question: '少人数での実施は？',
    answer: '1名から対応可能です。'
  },
  {
    id: 'faq-4',
    question: '研修期間はどのくらいですか？',
    answer: '90日間のプログラムで、段階的にAI活用スキルを習得します。1日目は経営者向けトレーニング、31日目に幹部研修開始、61日目に戦略策定、90日目に実行段階へ移行します。'
  },
  {
    id: 'faq-5',
    question: 'オンラインでも受講できますか？',
    answer: 'はい。経営者向けパーソナルAIトレーニングはオンライン形式で提供しています。（全8回、各60分）'
  },
  {
    id: 'faq-6',
    question: '助成金を利用すると実質いくらになりますか？',
    answer: '中小企業の場合、経費の75%が補助されます（上限30万円/人）。大企業は60%補助（上限20万円/人）です。例えば5人プランの場合、200万円が実質約50万円になります。'
  },
  {
    id: 'faq-7',
    question: '研修後のサポートはありますか？',
    answer: 'はい。継続型AI学習コミュニティ「AI MONDAY」を毎週月曜に開催しており、無料で参加いただけます。'
  },
  {
    id: 'faq-8',
    question: 'どのような企業が導入していますか？',
    answer: '15,000名以上の導入実績があり、自治体・官公庁案件も多数実施しています。'
  }
];

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id]
    );
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>よくある質問</h2>

        <div className={styles.faqList}>
          {faqData.map((item) => (
            <div
              key={item.id}
              className={`${styles.faqItem} ${
                openItems.includes(item.id) ? styles.open : ''
              }`}
            >
              <button
                className={styles.faqQuestion}
                onClick={() => toggleItem(item.id)}
                aria-expanded={openItems.includes(item.id)}
              >
                <span className={styles.questionText}>{item.question}</span>
                <span className={styles.icon}>
                  {openItems.includes(item.id) ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M6 12H18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 6V18M6 12H18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </span>
              </button>

              <div className={styles.faqAnswer}>
                <div className={styles.answerContent}>
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
