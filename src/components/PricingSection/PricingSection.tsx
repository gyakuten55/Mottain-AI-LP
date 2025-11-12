import React from 'react';
import styles from './PricingSection.module.scss';

const PricingSection = () => {
  return (
    <section className={styles.pricingSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>料金プラン</h2>
        <div className={styles.intro}>
          <p className={styles.subsidy}>助成金で最大75%OFF。</p>
          <p className={styles.proposal}>企業規模に応じて最適プランをご提案。</p>
        </div>

        <div className={styles.pricingCards}>
          {/* おためし5人プラン */}
          <div className={styles.pricingCard}>
            <div className={`${styles.cardHeader} ${styles.plan5}`}>
              <h3>おためし5人プラン</h3>
            </div>
            <div className={styles.cardBody}>
              <p className={styles.description}>
                まずは選抜メンバーで、<br />
                導入効果を試したい企業様向け
              </p>

              <div className={styles.pricing}>
                <div className={styles.initialFee}>
                  <span className={styles.feeLabel}>実質負担額</span>
                  <div className={styles.feeAmount}>
                    <span className={styles.amount}>50</span>
                    <span className={styles.unit}>万円</span>
                    <span className={styles.tax}>（税込）</span>
                  </div>
                  <div className={styles.arrow}>▲</div>
                </div>

                <div className={styles.monthlyFee}>
                  <span className={styles.feeLabel}>助成金適用前</span>
                  <div className={styles.feeAmount}>
                    <span className={styles.amount}>200</span>
                    <span className={styles.unit}>万円</span>
                    <span className={styles.tax}>（税込）</span>
                  </div>
                </div>
              </div>

              <ul className={styles.features}>
                <li className={styles.featureGray}>✓ Mottain-AI｜リーダーズ</li>
                <li className={styles.featureBold}>✓ Mottain-AI｜ヒーローズ 40万×5</li>
                <li className={styles.featureGray}>✓ Mottain-AI｜パートナーズ</li>
              </ul>

              <ul className={styles.conditions}>
                <li>最大75％を助成金にて補助可能です。<br />企業規模により補助率が異なりますので、詳しくはお問いあわせください。</li>
                <li>助成金の申請は、当社がサポートし、実際は弊社にて行っていただく形式となります。</li>
              </ul>
            </div>
          </div>

          {/* ごだわり10人プラン */}
          <div className={styles.pricingCard}>
            <div className={`${styles.cardHeader} ${styles.plan10}`}>
              <h3>ごだわり10人プラン</h3>
              <span className={styles.recommendedBadge}>おすすめ</span>
            </div>
            <div className={styles.cardBody}>
              <p className={styles.description}>
                本格的にAI活用を進めたい企業様向け
              </p>

              <div className={styles.pricing}>
                <div className={styles.initialFee}>
                  <span className={styles.feeLabel}>実質負担額</span>
                  <div className={styles.feeAmount}>
                    <span className={styles.amount}>100</span>
                    <span className={styles.unit}>万円</span>
                    <span className={styles.tax}>（税込）</span>
                  </div>
                  <div className={styles.arrow}>▲</div>
                </div>

                <div className={styles.monthlyFee}>
                  <span className={styles.feeLabel}>助成金適用前</span>
                  <div className={styles.feeAmount}>
                    <span className={styles.amount}>400</span>
                    <span className={styles.unit}>万円</span>
                    <span className={styles.tax}>（税込）</span>
                  </div>
                </div>
              </div>

              <ul className={styles.features}>
                <li className={styles.featureBold}>✓ Mottain-AI｜リーダーズ（無料提供）</li>
                <li className={styles.featureBold}>✓ Mottain-AI｜ヒーローズ 40万×10</li>
                <li className={styles.featureGray}>✓ Mottain-AI｜パートナーズ</li>
              </ul>

              <ul className={styles.conditions}>
                <li>最大75％を助成金にて補助可能です。<br />企業規模により補助率が異なりますので、詳細はお問いあわせください。</li>
                <li>助成金の申請については、当社がサポートし、実際は弊社にてお願いする形式となります。</li>
                <li>無償提供の内容につきましても、契約前の精査が必要となります。</li>
                <li>当社COOをはじめとする専門スタッフとの打ち合わせは、基本的にリモートにて実施いたします。</li>
              </ul>
            </div>
          </div>

          {/* よくばり15人プラン */}
          <div className={styles.pricingCard}>
            <div className={`${styles.cardHeader} ${styles.plan15}`}>
              <h3>よくばり15人プラン</h3>
            </div>
            <div className={styles.cardBody}>
              <p className={styles.description}>
                若手など幅広い人材で、<br />
                AI研修を推進したい企業様向け
              </p>

              <div className={styles.pricing}>
                <div className={styles.initialFee}>
                  <span className={styles.feeLabel}>実質負担額</span>
                  <div className={styles.feeAmount}>
                    <span className={styles.amount}>150</span>
                    <span className={styles.unit}>万円</span>
                    <span className={styles.tax}>（税込）</span>
                  </div>
                  <div className={styles.arrow}>▲</div>
                </div>

                <div className={styles.monthlyFee}>
                  <span className={styles.feeLabel}>助成金適用前</span>
                  <div className={styles.feeAmount}>
                    <span className={styles.amount}>600</span>
                    <span className={styles.unit}>万円</span>
                    <span className={styles.tax}>（税込）</span>
                  </div>
                </div>
              </div>

              <ul className={styles.features}>
                <li className={styles.featureBold}>✓ Mottain-AI｜リーダーズ（無料提供）</li>
                <li className={styles.featureBold}>✓ Mottain-AI｜ヒーローズ 40万×15</li>
                <li className={styles.featureBold}>✓ Mottain-AI｜パートナーズ★3（無料提供）</li>
              </ul>

              <ul className={styles.conditions}>
                <li>最大75％を助成金にて補助可能です。<br />企業規模により補助率が異なりますので、詳細はお問いあわせください。</li>
                <li>助成金の申請については、当社がサポートし、実際は弊社にてお願いする形式となります。</li>
                <li>無償提供の内容につきましても、契約前の精査が必要となります。</li>
                <li>当社COOをはじめとする専門スタッフとの打ち合わせは、基本的にリモートにて実施いたします。</li>
                <li>現在は、当社関係から移動時間5時間以内のお客様に限り、訪問対応を行っております。</li>
              </ul>
            </div>
          </div>
        </div>

        <p className={styles.footnote}>
          ※ 助成金適用で実質負担額は最大75％OFFになります。詳細はお問合せください。
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
