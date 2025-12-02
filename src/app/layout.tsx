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
  description: '中小企業の幹部層向けAIリスキリング研修。90日間で「AIを使いこなす組織」へ変革。経営者向けパーソナルトレーニング+幹部研修+戦略コンサルで、生産性と収益性を最大化。助成金で最大75%OFF。導入実績15,000名以上、満足度95%以上。',
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
    'Meta Heroes'
  ],
  authors: [{ name: '株式会社Meta Heroes' }],
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
    description: '中小企業の幹部層向けAIリスキリング研修。助成金で最大75%OFF。導入実績15,000名以上、満足度95%以上。',
    images: [
      {
        url: 'https://mottain-ai.com/images/first-view.png',
        width: 1200,
        height: 630,
        alt: 'Mottain-AI Heroes - 90日でAIを使いこなす組織へ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mottain-AI Heroes | 90日でAIを使いこなす組織へ',
    description: '中小企業向けAIリスキリング研修。助成金で最大75%OFF。導入実績15,000名以上。',
    images: ['https://mottain-ai.com/images/first-view.png'],
    creator: '@MetaHeroes_100',
  },
  alternates: {
    canonical: '/',
  },
  manifest: '/manifest.json',
};

// JSON-LD構造化データ（LLMO対策）
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://mottain-ai.com/#organization",
      "name": "株式会社Meta Heroes",
      "url": "https://meta-heroes.co.jp",
      "logo": "https://mottain-ai.com/images/logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "堂山町1-5 三共梅田ビル 8F",
        "addressLocality": "大阪市北区",
        "postalCode": "530-0027",
        "addressCountry": "JP"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "info@meta-heroes.io",
        "contactType": "customer service"
      },
      "sameAs": [
        "https://www.instagram.com/metaheroes100/",
        "https://x.com/MetaHeroes_100",
        "https://line.me/R/ti/p/@226osklk"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://mottain-ai.com/#website",
      "url": "https://mottain-ai.com",
      "name": "Mottain-AI Heroes",
      "description": "中小企業向けAIリスキリング研修サービス",
      "publisher": { "@id": "https://mottain-ai.com/#organization" }
    },
    {
      "@type": "Service",
      "@id": "https://mottain-ai.com/#service",
      "name": "Mottain-AI Heroes AIリスキリング研修",
      "provider": { "@id": "https://mottain-ai.com/#organization" },
      "description": "90日間の伴走型AIリスキリングプログラム。経営者向けトレーニング、幹部研修、AI戦略コンサルティングの3つのサービスで組織全体のAI活用力を向上。",
      "serviceType": "AI研修・リスキリング",
      "areaServed": "JP",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "研修プラン",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "おためし5人プラン",
            "price": "2000000",
            "priceCurrency": "JPY",
            "description": "5名まで参加可能な入門プラン。助成金活用で実質約50万円。"
          },
          {
            "@type": "Offer",
            "name": "こだわり10人プラン",
            "price": "4000000",
            "priceCurrency": "JPY",
            "description": "10名まで参加可能な標準プラン。助成金活用で実質約100万円。"
          },
          {
            "@type": "Offer",
            "name": "よくばり15人プラン",
            "price": "6000000",
            "priceCurrency": "JPY",
            "description": "15名まで参加可能なフルプラン。助成金活用で実質約200万円。"
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "15000",
        "bestRating": "5"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "AIの知識がなくても参加できますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "はい、初心者の方でも安心してご参加いただけます。基礎から丁寧に解説し、実践的なワークを通じて学んでいただけます。"
          }
        },
        {
          "@type": "Question",
          "name": "助成金は利用できますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "はい、人材開発支援助成金をご利用いただけます。中小企業の場合、最大75%（上限30万円/人）の補助が受けられます。申請サポートも行っております。"
          }
        },
        {
          "@type": "Question",
          "name": "研修期間はどのくらいですか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "基本プログラムは90日間です。1日目に経営者向けトレーニング開始、31日目から幹部研修、61日目から戦略策定を行い、90日目に実行フェーズへ移行します。"
          }
        },
        {
          "@type": "Question",
          "name": "オンラインでも受講できますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "はい、オンラインでの受講も可能です。経営者向けトレーニングはオンライン形式、幹部研修は集合研修またはオンラインからお選びいただけます。"
          }
        },
        {
          "@type": "Question",
          "name": "少人数でも研修を実施できますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "はい、最少5名様から研修を実施可能です。おためし5人プランをご用意しております。"
          }
        },
        {
          "@type": "Question",
          "name": "助成金を利用すると実質いくらになりますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "中小企業の場合、おためし5人プランは実質約50万円、こだわり10人プランは実質約100万円、よくばり15人プランは実質約200万円でご利用いただけます。"
          }
        },
        {
          "@type": "Question",
          "name": "研修後のサポートはありますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "はい、研修終了後もAI活用に関するご質問やフォローアップセッションを提供しております。継続的なサポートで定着を支援します。"
          }
        },
        {
          "@type": "Question",
          "name": "どのような企業が導入していますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "製造業、サービス業、IT企業など幅広い業種の中小企業様にご導入いただいております。従業員70名〜200名規模の企業様の導入実績が多くあります。"
          }
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
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
