import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import './globals.scss';
import '../styles/chatbot.css';

export const metadata: Metadata = {
  title: 'Mottain-AI Heroes | AIリスキリング研修で経営を変える',
  description: '中小企業幹部層向けAIリスキリング研修。最初の90日で「AIを使いこなす組織」へ。モッタイナイをなくすAI活用で、あなたの会社の収益を最大化。',
  keywords: ['AI研修', 'リスキリング', '中小企業', '幹部研修', '生成AI', '経営改革'],
  openGraph: {
    title: 'Mottain-AI Heroes | AIリスキリング研修',
    description: '最初の90日で「AIを使いこなす組織」へ。中小企業幹部層向けAIリスキリング研修。',
    type: 'website',
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
