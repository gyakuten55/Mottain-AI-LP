'use client';

import Image from 'next/image';
import styles from './page.module.scss';
import PricingSection from '@/components/PricingSection/PricingSection';
import CTABanner from '@/components/CTABanner/CTABanner';
import AchievementsSection from '@/components/AchievementsSection/AchievementsSection';
import CaseStudiesSection from '@/components/CaseStudiesSection/CaseStudiesSection';
import TestimonialsSection from '@/components/TestimonialsSection/TestimonialsSection';
import FAQSection from '@/components/FAQSection/FAQSection';
import FinalCTASection from '@/components/FinalCTASection/FinalCTASection';
import ContactButtonsSection from '@/components/ContactButtonsSection/ContactButtonsSection';

export default function Home() {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div>
      {/* ファーストビューセクション */}
      <section className={styles.firstView}>
        <Image
          src="/images/first-view.png"
          alt="Mottain-AI Heroes ファーストビュー"
          fill
          priority
          className={styles.firstViewImage}
          quality={90}
        />

        <button
          className={styles.scrollIndicator}
          onClick={handleScroll}
          aria-label="スクロール"
        >
          <span className={styles.scrollText}>SCROLL</span>
          <svg
            className={styles.scrollIcon}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
      </section>

      {/* こんなお悩み、ありませんか？セクション */}
      <section className={styles.problemSection}>
        {/* 上部エリア */}
        <div className={styles.problemTop}>
          <div className={styles.problemContainer}>
            <h2 className={styles.problemTitle}>
              「こんな<span className={styles.emphasizedWord}>お悩み</span>、ありませんか？」
            </h2>

            <div className={styles.problemCard}>
              <div className={styles.problemList}>
                <div className={styles.problemItem}>
                  <div className={styles.checkIcon}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M5 10L8.5 13.5L15 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>競合との差別化ができず、<span className={styles.gradientText}>価格競争が激化している</span></span>
                </div>

                <div className={styles.problemItem}>
                  <div className={styles.checkIcon}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M5 10L8.5 13.5L15 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span><span className={styles.gradientText}>新規事業・事業強化の方向性</span>が定まらない</span>
                </div>

                <div className={styles.problemItem}>
                  <div className={styles.checkIcon}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M5 10L8.5 13.5L15 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>人件費の高騰・採用難で<span className={styles.gradientText}>生産性が低下</span>している</span>
                </div>

                <div className={styles.problemItem}>
                  <div className={styles.checkIcon}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M5 10L8.5 13.5L15 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>AIを導入したいが、<span className={styles.gradientText}>どこから始めるべきかわからない</span></span>
                </div>

                <div className={styles.problemItem}>
                  <div className={styles.checkIcon}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M5 10L8.5 13.5L15 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>「何か新しいことを」と思いつつ、<span className={styles.gradientText}>具体策が見えない</span></span>
                </div>
              </div>
            </div>

            <Image
              src="/images/1533.png"
              alt="悩む女性"
              width={280}
              height={280}
              className={styles.illustrationLeft}
            />

            <Image
              src="/images/1521.png"
              alt="悩む男性"
              width={280}
              height={280}
              className={styles.illustrationRight}
            />
          </div>
        </div>

        {/* 下部エリア */}
        <div className={styles.problemBottom}>
          <div className={styles.problemBottomContent}>
            <p className={styles.ifText}>もし...</p>
            <h3 className={styles.challengeText}>
              たった<span className={styles.days90}>90</span>日でこの課題を打破できるとしたら？
            </h3>
            <button className={styles.programButton}>
              90日プログラムの内容を見る
            </button>
          </div>
        </div>
      </section>

      {/* ソリューションセクション */}
      <section className={styles.solutionSection}>
        <div className={styles.solutionContainer}>
          <div className={styles.solutionTitleWrapper}>
            <Image
              src="/images/logo.png"
              alt="Mottain-AI Heroes"
              width={200}
              height={60}
              className={styles.solutionLogo}
            />
            <h2 className={styles.solutionTitle}>でなら</h2>
          </div>

          <h3 className={styles.solutionCatchphrase}>
            最初の90日で、経営が変わる。
          </h3>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCircle}>
              <p className={styles.featureText}>
                日本一<br />わかりやすい<br />研修
              </p>
            </div>
            <div className={styles.featureCircle}>
              <p className={styles.featureText}>
                経営レベルの<br />サポート
              </p>
            </div>
            <div className={styles.featureCircle}>
              <p className={styles.featureText}>
                収益向上する<br />最新技術<br />活用
              </p>
            </div>
          </div>

          <p className={styles.solutionDescription}>
            幹部層の"AI活用力"を<span className={styles.highlight}>基礎</span>から<span className={styles.highlight}>実践</span>まで引き上げ、<br />
            <span className={styles.yellowMarker}>組織全体で生産性と収益性を高める</span><span className={styles.highlight2}>伴走型リスキリングプログラム</span>
          </p>
        </div>
      </section>

      {/* プログラム進行内容セクション */}
      <section className={styles.programSection}>
        <div className={styles.programContainer}>
          <div className={styles.programHeader}>
            <Image
              src="/images/1025.png"
              alt="喜ぶ人"
              width={160}
              height={160}
              className={styles.programIllustrationLeft}
            />
            <h2 className={styles.programTitle}>プログラムの進行内容</h2>
            <Image
              src="/images/1026.png"
              alt="喜ぶ人"
              width={160}
              height={160}
              className={styles.programIllustrationRight}
            />
          </div>

          {/* プログラムカード */}
          <div className={styles.programCards}>
            <div className={styles.programCard}>
              <div className={`${styles.programCardDay} ${styles.day1}`}>
                1日目
              </div>
              <div className={styles.programCardContent}>
                <h3 className={styles.programCardTitle}>経営者向けAIトレーニング</h3>
                <p className={styles.programCardDescription}>経営判断に直結するAI知識を習得</p>
              </div>
            </div>

            <div className={styles.programCard}>
              <div className={`${styles.programCardDay} ${styles.day15}`}>
                15日目
              </div>
              <div className={styles.programCardContent}>
                <h3 className={styles.programCardTitle}>社内研修方針策定</h3>
                <p className={styles.programCardDescription}>自社に合わせたカリキュラムを選定</p>
              </div>
            </div>

            <div className={styles.programCard}>
              <div className={`${styles.programCardDay} ${styles.day31}`}>
                31日目
              </div>
              <div className={styles.programCardContent}>
                <h3 className={styles.programCardTitle}>幹部研修スタート</h3>
                <p className={styles.programCardDescription}>幹部層にAIリテラシーを定着</p>
              </div>
            </div>

            <div className={styles.programCard}>
              <div className={`${styles.programCardDay} ${styles.day61}`}>
                61日目
              </div>
              <div className={styles.programCardContent}>
                <h3 className={styles.programCardTitle}>戦略策定開始</h3>
                <p className={styles.programCardDescription}>AIを前提とした経営・事業戦略を共創</p>
              </div>
            </div>

            <div className={styles.programCard}>
              <div className={`${styles.programCardDay} ${styles.day90}`}>
                90日目
              </div>
              <div className={styles.programCardContent}>
                <h3 className={styles.programCardTitle}>実行フェーズへ</h3>
                <p className={styles.programCardDescription}>経営改革の実践をスタート</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA（この90日間で何が変わるのか）セクション */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <button className={styles.ctaButton}>
            この90日間で何が変わるのかを見る
          </button>
        </div>
      </section>

      {/* サービス概要セクション */}
      <section className={styles.serviceSection}>
        <div className={styles.serviceContainer}>
          <h2 className={styles.serviceTitle}>サービス概要</h2>
          <p className={styles.serviceSubtitle}>
            3つのプログラムで、<span className={styles.serviceHighlight}>"AIを使いこなす組織"</span>をつくる
          </p>

          <div className={styles.serviceCards}>
            {/* Mottain-AI リーダーズ */}
            <div className={`${styles.serviceCard} ${styles.cardLeaders}`}>
              <div className={`${styles.serviceCardHeader} ${styles.headerLeaders}`}></div>
              <div className={styles.serviceCardBody}>
                <div className={styles.serviceCardLogo}>
                  <Image
                    src="/images/logo.png"
                    alt="Mottain-AI Heroes"
                    width={120}
                    height={36}
                  />
                  <span className={styles.serviceCardName}>リーダーズ</span>
                </div>

                <div className={styles.serviceCardTarget}>
                  <p className={styles.targetLabel}>おすすめの対象者</p>
                  <p className={styles.targetValue}>経営者</p>
                </div>

                <div className={styles.serviceCardImage}>
                  <Image
                    src="/images/882.png"
                    alt="経営者"
                    width={200}
                    height={160}
                  />
                </div>

                <div className={styles.serviceCardContent}>
                  <p className={styles.contentTitle}>AIリテラシー講義</p>
                  <p className={styles.contentPlus}>+</p>
                  <p className={styles.contentTitle}>経営刷新セッション</p>
                  <p className={styles.contentDuration}>(全8回)</p>
                </div>

                <button onClick={() => scrollToSection('leaders-detail')} className={styles.serviceCardLink}>
                  詳細を見る
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Mottain-AI ヒーローズ */}
            <div className={`${styles.serviceCard} ${styles.cardHeroes}`}>
              <div className={`${styles.serviceCardHeader} ${styles.headerHeroes}`}></div>
              <div className={styles.serviceCardBody}>
                <div className={styles.serviceCardLogo}>
                  <Image
                    src="/images/logo.png"
                    alt="Mottain-AI Heroes"
                    width={120}
                    height={36}
                  />
                  <span className={styles.serviceCardName}>ヒーローズ</span>
                </div>

                <div className={styles.serviceCardTarget}>
                  <p className={styles.targetLabel}>おすすめの対象者</p>
                  <p className={styles.targetValue}>幹部層</p>
                </div>

                <div className={styles.serviceCardImage}>
                  <Image
                    src="/images/1200.png"
                    alt="幹部層"
                    width={200}
                    height={160}
                  />
                </div>

                <div className={styles.serviceCardContent}>
                  <p className={styles.contentDescription}>AI基礎・生成AI・</p>
                  <p className={styles.contentDescription}>業務自動化・資料作成</p>
                  <p className={styles.contentDuration}>(全12時間)</p>
                </div>

                <button onClick={() => scrollToSection('heroes-detail')} className={styles.serviceCardLink}>
                  詳細を見る
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Mottain-AI パートナーズ */}
            <div className={`${styles.serviceCard} ${styles.cardPartners}`}>
              <div className={`${styles.serviceCardHeader} ${styles.headerPartners}`}></div>
              <div className={styles.serviceCardBody}>
                <div className={styles.serviceCardLogo}>
                  <Image
                    src="/images/logo.png"
                    alt="Mottain-AI Heroes"
                    width={120}
                    height={36}
                  />
                  <span className={styles.serviceCardName}>パートナーズ</span>
                </div>

                <div className={styles.serviceCardTarget}>
                  <p className={styles.targetLabel}>おすすめの対象者</p>
                  <p className={styles.targetValue}>経営チーム</p>
                </div>

                <div className={styles.serviceCardImage}>
                  <Image
                    src="/images/1414.png"
                    alt="経営チーム"
                    width={200}
                    height={160}
                  />
                </div>

                <div className={styles.serviceCardContent}>
                  <p className={styles.contentTitle}>AI戦略コンサルティング</p>
                  <p className={styles.contentDuration}>(週1回×3ヶ月)</p>
                </div>

                <button onClick={() => scrollToSection('partners-detail')} className={styles.serviceCardLink}>
                  詳細を見る
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mottain-AI リーダーズ詳細セクション */}
      <section id="leaders-detail" className={styles.leadersDetailSection}>
        <div className={styles.leadersDetailContainer}>
          <div className={styles.leadersDetailHeader}>
            <Image
              src="/images/logo.png"
              alt="Mottain-AI Heroes"
              width={200}
              height={60}
            />
            <h2 className={styles.leadersDetailTitle}>リーダーズ</h2>
          </div>
          <p className={styles.leadersDetailSubtitle}>経営者向けパーソナルAIトレーニング＜オンライン＞</p>

          <div className={styles.leadersDetailContent}>
            {/* 左側：概要カード */}
            <div className={styles.leadersOverviewCard}>
              <div className={styles.leadersOverviewHeader}>1日目</div>
              <div className={styles.leadersOverviewBody}>
                <h3 className={styles.leadersOverviewTitle}>経営者向け<br />パーソナルAI<br />トレーニング</h3>
                <p className={styles.leadersOverviewDescription}>
                  1か月で経営の刷新に必要なAIの最新情報から活用事例まで幅広く、最新情報を学習。
                </p>
                <p className={styles.leadersOverviewDuration}>(週2×4週/各60分)</p>
              </div>
            </div>

            {/* 右側：DAYカード群 */}
            <div className={styles.leadersDayCards}>
              <div className={styles.leadersDayCard}>
                <div className={styles.leadersDayHeader}>DAY 1</div>
                <div className={styles.leadersDayBody}>
                  <h4 className={styles.leadersDayTitle}>AI概論</h4>
                  <p className={styles.leadersDayDescription}>最初にAI技術の基礎的な知識や最新の生成AIなどの動向を学びます。</p>
                </div>
                <div className={styles.leadersDayArrow}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              <div className={styles.leadersDayCard}>
                <div className={styles.leadersDayHeader}>DAY 2</div>
                <div className={styles.leadersDayBody}>
                  <h4 className={styles.leadersDayTitle}>産業構造の変化</h4>
                  <p className={styles.leadersDayDescription}>業界別にAI導入事例やAI導入の潮流を危険性と共に学びます。</p>
                </div>
                <div className={styles.leadersDayArrow}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              <div className={styles.leadersDayCard}>
                <div className={styles.leadersDayHeader}>DAY 3</div>
                <div className={styles.leadersDayBody}>
                  <h4 className={styles.leadersDayTitle}>業務別活用事例</h4>
                  <p className={styles.leadersDayDescription}>経理や人事・営業・集客など各領域への適用を学びます。</p>
                </div>
                <div className={styles.leadersDayArrow}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              <div className={styles.leadersDayCard}>
                <div className={styles.leadersDayHeader}>DAY 4</div>
                <div className={styles.leadersDayBody}>
                  <h4 className={styles.leadersDayTitle}>推進方法/体制</h4>
                  <p className={styles.leadersDayDescription}>段階的導入の考え方や社内外人材との連携を学びます。</p>
                </div>
                <div className={styles.leadersDayArrow}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              <div className={styles.leadersDayCard}>
                <div className={styles.leadersDayHeader}>DAY 5</div>
                <div className={styles.leadersDayBody}>
                  <h4 className={styles.leadersDayTitle}>業種業態別</h4>
                  <p className={styles.leadersDayDescription}>貴社の領域に沿った具体的な活用事例を深掘りします。</p>
                </div>
                <div className={styles.leadersDayArrow}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              <div className={styles.leadersDayCard}>
                <div className={styles.leadersDayHeader}>DAY 6</div>
                <div className={styles.leadersDayBody}>
                  <h4 className={styles.leadersDayTitle}>自社業務棚卸し</h4>
                  <p className={styles.leadersDayDescription}>業務手順の分析を行い、得られる成果の仮説立てを実施します。</p>
                </div>
                <div className={styles.leadersDayArrow}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              <div className={styles.leadersDayCard}>
                <div className={styles.leadersDayHeader}>DAY 7</div>
                <div className={styles.leadersDayBody}>
                  <h4 className={styles.leadersDayTitle}>付加価値の創造</h4>
                  <p className={styles.leadersDayDescription}>既存事業の強化や回復領域における新規事業企画を検討します。</p>
                </div>
                <div className={styles.leadersDayArrow}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              <div className={styles.leadersDayCard}>
                <div className={styles.leadersDayHeader}>DAY 8</div>
                <div className={styles.leadersDayBody}>
                  <h4 className={styles.leadersDayTitle}>導入計画設計</h4>
                  <p className={styles.leadersDayDescription}>自社に合った現実的なAI導入計画の構築を一緒に行います。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mottain-AI ヒーローズ詳細セクション */}
      <section id="heroes-detail" className={styles.heroesDetailSection}>
        <div className={styles.heroesDetailContainer}>
          <div className={styles.heroesDetailHeader}>
            <Image
              src="/images/logo.png"
              alt="Mottain-AI Heroes"
              width={200}
              height={60}
            />
            <h2 className={styles.heroesDetailTitle}>ヒーローズ</h2>
          </div>
          <p className={styles.heroesDetailSubtitle}>幹部層向けAI活用・内製化研修</p>

          <div className={styles.heroesDetailContent}>
            {/* 左側：開始カード */}
            <div className={styles.heroesOverviewCard}>
              <div className={styles.heroesOverviewHeader}>31日目</div>
              <div className={styles.heroesOverviewBody}>
                <h3 className={styles.heroesOverviewTitle}>幹部向け<br />研修開始</h3>
                <p className={styles.heroesOverviewDescription}>
                  まずは会社の中心にいらっしゃる皆様に最低限の知識を、議論可能な状態に導きます。
                </p>
                <p className={styles.heroesOverviewDuration}>〈5日間/全12時間〉</p>
              </div>
            </div>

            {/* 中央：カスタム研修カード */}
            <div className={styles.heroesCustomCard}>
              <div className={styles.heroesCustomHeader}>
                貴社課題に<br />合わせての<br />オリジナル<br />研修を実施
              </div>
              <div className={styles.heroesCustomBody}>
                <p className={styles.heroesCustomDescription}>
                  内容は課題に合わせて、完全オリジナルで設計致します。
                </p>
              </div>
            </div>

            {/* 右側：実施内容例カード群 */}
            <div className={styles.heroesImplementationCards}>
              <div className={styles.heroesImplementationCard}>
                <div className={styles.heroesImplementationHeader}>実施内容例 ①</div>
                <div className={styles.heroesImplementationBody}>
                  <p className={styles.heroesImplementationTitle}>AIの基礎と最新動向</p>
                </div>
              </div>

              <div className={styles.heroesImplementationCard}>
                <div className={styles.heroesImplementationHeader}>実施内容例 ②</div>
                <div className={styles.heroesImplementationBody}>
                  <p className={styles.heroesImplementationTitle}>生成AIツールと活用技能</p>
                </div>
              </div>

              <div className={styles.heroesImplementationCard}>
                <div className={styles.heroesImplementationHeader}>実施内容例 ③</div>
                <div className={styles.heroesImplementationBody}>
                  <p className={styles.heroesImplementationTitle}>収益機能の向上のためのAI活用</p>
                </div>
              </div>

              <div className={styles.heroesImplementationCard}>
                <div className={styles.heroesImplementationHeader}>実施内容例 ④</div>
                <div className={styles.heroesImplementationBody}>
                  <p className={styles.heroesImplementationTitle}>事業データ分析と自動化技能</p>
                </div>
              </div>

              <div className={styles.heroesImplementationCard}>
                <div className={styles.heroesImplementationHeader}>実施内容例 ⑤</div>
                <div className={styles.heroesImplementationBody}>
                  <p className={styles.heroesImplementationTitle}>提案書・企画書などの文書・資料作成効率化</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mottain-AI リーダーズ AI活用戦略コンサルティング */}
      <section id="partners-detail" className={styles.consultingDetailSection}>
        <div className={styles.consultingDetailContainer}>
          <div className={styles.consultingDetailHeader}>
            <Image
              src="/images/logo.png"
              alt="Mottain-AI Leaders"
              width={200}
              height={60}
            />
            <h2 className={styles.consultingDetailTitle}>リーダーズ</h2>
          </div>
          <p className={styles.consultingDetailSubtitle}>AI活用戦略コンサルティング</p>

          <div className={styles.consultingDetailContent}>
            {/* 左側：開始カード */}
            <div className={styles.consultingStartCard}>
              <div className={styles.consultingStartHeader}>61日目</div>
              <div className={styles.consultingStartBody}>
                <h3 className={styles.consultingStartTitle}>自社戦略の<br />策定開始</h3>
                <p className={styles.consultingStartDescription}>
                  今後のAI活用を前提とした経営/事業戦略の中長期の展望を3か月〜6か月に共創しましょう。
                </p>
                <p className={styles.consultingStartDuration}>〈週1回/60分〉</p>
              </div>
            </div>

            {/* 中央：3つの重なり合う円 */}
            <div className={styles.consultingCirclesArea}>
              <div className={styles.consultingCirclesLogo}>
                <Image
                  src="/images/logo.png"
                  alt="Mottain-AI"
                  width={150}
                  height={45}
                />
              </div>
              <div className={styles.consultingCirclesContainer}>
                <div className={`${styles.consultingCircle} ${styles.consultingCircle1}`}>
                  <span>付加価値<br />向上</span>
                </div>
                <div className={`${styles.consultingCircle} ${styles.consultingCircle2}`}>
                  <span>営業機能<br />強化</span>
                </div>
                <div className={`${styles.consultingCircle} ${styles.consultingCircle3}`}>
                  <span>新規事業<br />構想</span>
                </div>
              </div>
            </div>

            {/* 右側：ロードマップ（プレースホルダー） */}
            <div className={styles.consultingRoadmapCard}>
              <div className={styles.consultingRoadmapPlaceholder}>
                <p className={styles.consultingRoadmapText}>ロードマップ</p>
                <p className={styles.consultingRoadmapNote}>※画像は後から追加予定</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <button className={styles.ctaButton}>
            料金と助成金を確認する
          </button>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* CTA Banner */}
      <CTABanner />

      {/* Achievements Section */}
      <AchievementsSection />

      {/* Case Studies Section */}
      <CaseStudiesSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Final CTA Section */}
      <FinalCTASection />

      {/* Contact Buttons Section */}
      <ContactButtonsSection />
    </div>
  );
}
