import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const notoSansJP = Noto_Sans_JP({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: '株式会社NAWA | 三代で紡いだ技術を、次の暮らしへ',
  description: '岐阜県のリフォーム・新築工事専門店。三代で紡いだ技術を、次の暮らしへ。リフォーム工事一式、新築工事一式、非住宅工事一式、店舗改装工事、設計デザインを承ります。',
  keywords: 'NAWA,リフォーム,新築,岐阜,名古屋,工事,住宅',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
