'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import styles from './TestimonialsSection.module.scss';

// 受講者の声のデータ型
interface Testimonial {
  id: string;
  name: string;
  avatarColor: string;
  title: string;
  titleHighlight: string;
  content: string;
}

// 受講者の声データ
const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Iさん',
    avatarColor: '#4aba7f',
    title: '以前は「AIで調べるだけ」に留まっていましたが、研修でまったく',
    titleHighlight: '新しい活用法に気づけました。',
    content: '特に業務の自動化や資料作成など、"使える場面"が一気に広がった実感があります。'
  },
  {
    id: 'testimonial-2',
    name: 'Hさん',
    avatarColor: '#4a90e2',
    title: '対面研修だからこそ、個別業務に即した',
    titleHighlight: '具体的な質問に丁寧に答えていただけました。',
    content: '現場で感じていた小さなつまずきや歩留まりが、その場で解消され、大きな前進につながりました。'
  },
  {
    id: 'testimonial-3',
    name: 'Tさん',
    avatarColor: '#f4b942',
    title: 'グループディスカッション形式の',
    titleHighlight: 'ワークショップが非常に有益でした。',
    content: '自社の業務課題を共有しながら、どこに生成AIを活かせるかを探るプロセスは、気づきと学びの連続でした。'
  },
  {
    id: 'testimonial-4',
    name: 'Sさん',
    avatarColor: '#1e88c7',
    title: '研修を通じて、社内のAI活用に必要な',
    titleHighlight: 'IT環境が整いました。',
    content: 'ブラウザや拡張機能など、日々の業務に直結する"使いやすさ"が大幅に向上しました。'
  },
  {
    id: 'testimonial-5',
    name: 'Kさん',
    avatarColor: '#e74c3c',
    title: '実践中心の研修だったからこそ、',
    titleHighlight: '「手で覚える」ことができました。',
    content: 'プロンプトの作り方から業務テンプレートの応用まで、細かなフォローも丁寧で安心感がありました。'
  }
];

export default function TestimonialsSection() {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        {/* タイトル */}
        <p className={styles.subtitle}>課題が変わった、意識が変わった</p>
        <h2 className={styles.sectionTitle}>受講者の声</h2>

        {/* カルーセル */}
        <div className={styles.carouselWrapper}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            initialSlide={1}
            navigation={{
              nextEl: '.testimonials-button-next',
              prevEl: '.testimonials-button-prev',
            }}
            pagination={{
              el: '.testimonials-pagination',
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
            }}
            className={styles.swiper}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className={styles.testimonialCard}>
                  <div className={styles.cardContent}>
                    {/* アバター */}
                    <div className={styles.avatarSection}>
                      <div
                        className={styles.avatar}
                        style={{ backgroundColor: testimonial.avatarColor }}
                      >
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                          <circle cx="24" cy="18" r="8" fill="white"/>
                          <path d="M10 40C10 32 16 28 24 28C32 28 38 32 38 40" fill="white"/>
                        </svg>
                      </div>
                      <p className={styles.name}>{testimonial.name}</p>
                    </div>

                    {/* 感想 */}
                    <div className={styles.testimonialContent}>
                      <h3 className={styles.testimonialTitle}>
                        {testimonial.title}
                        <span className={styles.highlight}>{testimonial.titleHighlight}</span>
                      </h3>
                      <p className={styles.testimonialText}>{testimonial.content}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* カスタムナビゲーションボタン */}
          <div className={`${styles.navButton} ${styles.navPrev} testimonials-button-prev`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className={`${styles.navButton} ${styles.navNext} testimonials-button-next`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* カスタムページネーション */}
          <div className={`${styles.pagination} testimonials-pagination`}></div>
        </div>
      </div>
    </section>
  );
}
