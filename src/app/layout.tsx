import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import './globals.scss';
import '../styles/chatbot.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://mottain-ai.com'),
  title: {
    default: 'Mottain-AI Heroes | 90日でAIを使いこなす組織へ｜中小企業向けAIリスキリング研修',
    template: '%s | Mottain-AI Heroes'
  },
  description: '中小企業の幹部層向けAIリスキリング研修。90日間で「AIを使いこなす組織」へ変革。経営者向けパーソナルトレーニング+幹部研修+戦略コンサルで、生産性と収益性を最大化。助成金で最大75%OFF。導入実績15,000名以上、満足度95%以上。株式会社Meta Heroes提供。',
  keywords: [
    'AI研修',
    'AIリスキリング',
    '生成AI研修',
    '中小企業',
    '幹部研修',
    '経営者研修',
    'DX推進',
    'デジタル人材育成',
    'AI内製化',
    'AI戦略コンサルティング',
    '人材開発助成金',
    'リスキリング助成金',
    '経営改革',
    '生産性向上',
    '業務効率化',
    '伴走型研修',
    'オンライン研修',
    '大阪',
    '東京',
    'Meta Heroes',
    'ChatGPT研修',
    'Gemini研修'
  ],
  authors: [{ name: '株式会社Meta Heroes', url: 'https://meta-heroes.co.jp/' }],
  creator: '株式会社Meta Heroes',
  publisher: '株式会社Meta Heroes',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://mottain-ai.com',
    siteName: 'Mottain-AI Heroes',
    title: 'Mottain-AI Heroes | 90日でAIを使いこなす組織へ',
    description: '中小企業の幹部層向けAIリスキリング研修。助成金で最大75%OFF。導入実績15,000名以上、満足度95%以上。株式会社Meta Heroes提供。',
    images: [
      {
        url: 'https://mottain-ai.com/images/first-view.png',
        width: 1200,
        height: 630,
        alt: 'Mottain-AI Heroes - 90日でAIを使いこなす組織へ｜中小企業向けAIリスキリング研修',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mottain-AI Heroes | 90日でAIを使いこなす組織へ',
    description: '中小企業向けAIリスキリング研修。助成金で最大75%OFF。導入実績15,000名以上。株式会社Meta Heroes提供。',
    images: ['https://mottain-ai.com/images/first-view.png'],
    site: '@MetaHeroes_100',
    creator: '@MetaHeroes_100',
  },
  alternates: {
    canonical: '/',
  },
  manifest: '/manifest.json',
  other: {
    'format-detection': 'telephone=no',
  },
};

// JSON-LD構造化データ（SEO・LLMO最適化）
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // Organization（企業情報 - 詳細版）
    {
      "@type": "Organization",
      "@id": "https://meta-heroes.co.jp/#organization",
      "name": "株式会社Meta Heroes",
      "alternateName": ["MetaHeroes", "メタヒーローズ", "Meta Heroes Inc."],
      "url": "https://meta-heroes.co.jp/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mottain-ai.com/images/metaheroes_logo.png",
        "width": "200",
        "height": "60"
      },
      "foundingDate": "2021-12-03",
      "founder": {
        "@type": "Person",
        "name": "松石和俊"
      },
      "description": "メタバース・AI・DX領域で「地方創生3.0」を推進し、日本の社会課題を解決する企業。Fortnite・Robloxを活用した防災メタバース、AIリスキリング研修「Mottain-AI Heroes」を展開。2025年大阪・関西万博に向けたグローバル戦略子会社「株式会社Meta Earth Heroes」を設立。",
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "堂山町1-5 三共梅田ビル8F",
          "addressLocality": "大阪市北区",
          "addressRegion": "大阪府",
          "postalCode": "530-0027",
          "addressCountry": "JP"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "渋谷2-24-12 渋谷スクランブルスクエア39階",
          "addressLocality": "渋谷区",
          "addressRegion": "東京都",
          "postalCode": "150-6139",
          "addressCountry": "JP"
        }
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "info@meta-heroes.io",
        "contactType": "customer service"
      },
      "sameAs": [
        "https://prtimes.jp/main/html/searchrlp/company_id/94539",
        "https://www.instagram.com/metaheroes100/",
        "https://x.com/MetaHeroes_100",
        "https://line.me/R/ti/p/@226osklk"
      ],
      "knowsAbout": ["メタバース", "AI", "DX", "地方創生", "防災", "eスポーツ", "リスキリング", "Fortnite", "Roblox", "UEFN", "ChatGPT", "Gemini"]
    },

    // WebSite（サイト基本情報）
    {
      "@type": "WebSite",
      "@id": "https://mottain-ai.com/#website",
      "name": "Mottain-AI Heroes",
      "alternateName": "モッタイナイ・ヒーローズ",
      "url": "https://mottain-ai.com",
      "description": "中小企業向けAIリスキリング研修。90日間で「AIを使いこなす組織」へ変革。助成金で最大75%OFF。導入実績15,000名以上、満足度95%以上。",
      "inLanguage": "ja-JP",
      "publisher": { "@id": "https://meta-heroes.co.jp/#organization" }
    },

    // Course（研修プログラム - SEO/LLMO核心）
    {
      "@type": "Course",
      "@id": "https://mottain-ai.com/#course",
      "name": "Mottain-AI Heroes AIリスキリング研修プログラム",
      "description": "経営者向けパーソナルAIトレーニング、幹部層向けAI活用研修、AI戦略コンサルティングの3層構造で、90日間で組織全体をAI活用可能な状態へ変革する伴走型リスキリングプログラム。「あなたの会社のモッタイナイをなくす」をコンセプトに、生産性と収益性を最大化します。",
      "provider": { "@id": "https://meta-heroes.co.jp/#organization" },
      "coursePrerequisites": "AI初心者でも参加可能。基礎から実践まで習得できるカリキュラム。",
      "educationalLevel": "経営者・幹部層向け",
      "timeRequired": "P90D",
      "teaches": [
        "生成AI活用（ChatGPT/Gemini）",
        "プロンプトエンジニアリング",
        "AI業務自動化（GAS連携）",
        "AI経営戦略",
        "デジタル人材育成",
        "LLM活用とチャットボット構築"
      ],
      "hasCourseInstance": [
        {
          "@type": "CourseInstance",
          "name": "Mottain-AI Leaders（経営者向けパーソナルAIトレーニング）",
          "description": "週2回×4週間のマンツーマン集中セッション。AI概論、産業構造の変化、自社業務棚卸し、事業戦略への統合を実施。",
          "courseMode": "online",
          "duration": "PT480M"
        },
        {
          "@type": "CourseInstance",
          "name": "Mottain-AI Heroes（幹部層向けAI活用・内製化研修）",
          "description": "5日間（全12時間）のハンズオン研修。ChatGPT/Gemini実装、プロンプトエンジニアリング、GAS連携による業務自動化など実践的スキルを習得。",
          "courseMode": "blended",
          "duration": "PT720M"
        },
        {
          "@type": "CourseInstance",
          "name": "Mottain-AI Partners（AI活用戦略コンサルティング）",
          "description": "習得スキルを基にした自社戦略策定と実行支援。AI活用計画の実行、社内研修方針策定を行い、組織の自走化をサポート。",
          "courseMode": "blended"
        }
      ],
      "offers": [
        {
          "@type": "Offer",
          "name": "おためし5人プラン",
          "price": "500000",
          "priceCurrency": "JPY",
          "description": "定価200万円 → 人材開発支援助成金適用で実質50万円（75%OFF）",
          "eligibleQuantity": { "@type": "QuantitativeValue", "value": 5 },
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "name": "こだわり10人プラン（おすすめ）",
          "price": "1000000",
          "priceCurrency": "JPY",
          "description": "定価400万円 → 人材開発支援助成金適用で実質100万円（75%OFF）+ 経営者研修（98万円相当）無料",
          "eligibleQuantity": { "@type": "QuantitativeValue", "value": 10 },
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "name": "よくばり15人プラン",
          "price": "1500000",
          "priceCurrency": "JPY",
          "description": "定価600万円 → 人材開発支援助成金適用で実質150万円（75%OFF）+ 経営者研修（98万円相当）無料",
          "eligibleQuantity": { "@type": "QuantitativeValue", "value": 15 },
          "availability": "https://schema.org/InStock"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.75",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "15000",
        "reviewCount": "15000"
      },
      "review": [
        {
          "@type": "Review",
          "author": { "@type": "Organization", "name": "S社（社員数70名）" },
          "reviewBody": "3年間で3,080万円の経費削減を実現。約2,000万円の開発予算を既存AIサービス活用で代替。",
          "reviewRating": { "@type": "Rating", "ratingValue": "5" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Organization", "name": "M社（社員数12,000名）" },
          "reviewBody": "3年間で約6億2,208万円の削減効果を試算。一人当たり年間48時間の業務削減を実現。",
          "reviewRating": { "@type": "Rating", "ratingValue": "5" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Organization", "name": "T社（社員数150名）" },
          "reviewBody": "3年間で4,500万円の経費削減を実現。",
          "reviewRating": { "@type": "Rating", "ratingValue": "5" }
        }
      ]
    },

    // FAQPage（8つのFAQ）
    {
      "@type": "FAQPage",
      "@id": "https://mottain-ai.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "初心者でも参加できますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "はい。AIに触れたことのない方でも、基礎から実践まで習得できます。"
          }
        },
        {
          "@type": "Question",
          "name": "助成金の条件は？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "雇用保険加入者であれば対象となります。条件確認もサポートします。人材開発支援助成金（事業展開等リスキリング支援コース）を活用し、中小企業は経費の75%（上限30万円/人）、大企業は60%（上限20万円/人）が補助されます。"
          }
        },
        {
          "@type": "Question",
          "name": "少人数での実施は可能ですか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "はい、1名から対応可能です。"
          }
        },
        {
          "@type": "Question",
          "name": "研修期間はどのくらいですか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "90日間のプログラムで、段階的にAI活用スキルを習得します。1日目は経営者向けトレーニング開始、15日目に社内研修方針策定、31日目に幹部研修開始、61日目に戦略策定開始、90日目に実行段階へ移行します。"
          }
        },
        {
          "@type": "Question",
          "name": "オンラインでも受講できますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "はい。経営者向けパーソナルAIトレーニングはオンライン形式で提供しています。（全8回、各60分）"
          }
        },
        {
          "@type": "Question",
          "name": "助成金を利用すると実質いくらになりますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "中小企業の場合、経費の75%が補助されます（上限30万円/人）。大企業は60%補助（上限20万円/人）です。例えば5人プランの場合、200万円が実質約50万円になります。10人プラン以上では経営者研修（98万円相当）も無料で付きます。"
          }
        },
        {
          "@type": "Question",
          "name": "研修後のサポートはありますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "はい。継続型AI学習コミュニティ「AI MONDAY」を毎週月曜に開催しており、無料で参加いただけます。元スクウェア・エニックス米国社長など豪華ゲストによる最新トレンド共有も行っています。"
          }
        },
        {
          "@type": "Question",
          "name": "どのような企業が導入していますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "15,000名以上の導入実績があり、J:COM、JR東海エージェンシー、JTAなど大手企業から地域中小企業、自治体・官公庁案件まで幅広く実施しています。"
          }
        }
      ]
    },

    // ProfessionalService（専門サービス）
    {
      "@type": "ProfessionalService",
      "@id": "https://mottain-ai.com/#service",
      "name": "Mottain-AI Heroes",
      "description": "あなたの会社の「モッタイナイ」をなくす。中小企業向けAIリスキリング研修で、生産性と収益性を最大化。経営層と現場層を同時に変革するデュアル・カリキュラムにより、組織の分断を防ぎ、変革の実効性を最大化します。",
      "provider": { "@id": "https://meta-heroes.co.jp/#organization" },
      "areaServed": {
        "@type": "Country",
        "name": "Japan"
      },
      "serviceType": ["AIリスキリング研修", "DX人材育成", "経営者向けAIトレーニング", "AI戦略コンサルティング", "生成AI研修"]
    },

    // EducationalOrganization（教育機関としての側面）
    {
      "@type": "EducationalOrganization",
      "@id": "https://mottain-ai.com/#education",
      "name": "Hero Egg（ヒーローズエッグ）",
      "description": "次世代のHEROを輩出するDX教育施設。子どもから大人まで、3DCG（Blender）・メタバース（UEFN/Roblox Studio）・AI活用を学べる。Mottain-AI Heroes研修費用の一部は子ども向けDX教育に還元されます。",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "なんばパークス1F e-stadiumなんば本店内",
        "addressLocality": "大阪市浪速区",
        "addressRegion": "大阪府",
        "addressCountry": "JP"
      },
      "parentOrganization": { "@id": "https://meta-heroes.co.jp/#organization" }
    },

    // LocalBusiness（コミュニティスペース）
    {
      "@type": "LocalBusiness",
      "@id": "https://mottain-ai.com/#guild",
      "name": "Meta Heroes Guild",
      "description": "大阪・梅田のコミュニティスペース。ゲーム大会のパブリックビューイングやクリエイター交流会を開催。",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "太融寺町 プラザ梅田ビルB1F",
        "addressLocality": "大阪市北区",
        "addressRegion": "大阪府",
        "addressCountry": "JP"
      },
      "parentOrganization": { "@id": "https://meta-heroes.co.jp/#organization" }
    },

    // BreadcrumbList
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "ホーム",
          "item": "https://mottain-ai.com/"
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <Script
          src="/chatbot/aivo-chatbot.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
