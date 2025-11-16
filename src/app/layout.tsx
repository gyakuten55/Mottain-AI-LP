import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import './globals.scss';
import '../styles/chatbot.css';

export const metadata: Metadata = {
  title: 'Mottain-AI Heroes | 90日でAIを使いこなす組織へ｜中小企業向けAIリスキリング研修',
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
  openGraph: {
    title: 'Mottain-AI Heroes | 90日でAIを使いこなす組織へ',
    description: '中小企業の幹部層向けAIリスキリング研修。助成金で最大75%OFF。導入実績15,000名以上、満足度95%以上。',
    type: 'website',
    url: 'https://mottain-ai.com',
    siteName: 'Mottain-AI Heroes',
    locale: 'ja_JP',
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
  },
  metadataBase: new URL('https://mottain-ai.com'),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
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
