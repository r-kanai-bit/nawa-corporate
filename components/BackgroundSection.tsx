import Image from 'next/image'

export default function BackgroundSection() {
  return (
    <section className="relative overflow-hidden">
      {/* いちばん"3代目らしい" セクション */}
      <div className="relative min-h-[50vh] flex items-center justify-center bg-white/80">
        {/* 背景ロゴ */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="relative w-[60vw] md:w-[50vw] h-[30vh] md:h-[40vh] opacity-20 mt-56 md:mt-10">

            <Image
              src="/logo-new.png"
              alt="株式会社NAWA"
              fill
              className="object-contain"
            />
          </div>
        </div>
        
        <div className="relative text-center px-4 py-16 z-10">
          <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#B8860B' }}>
            いちばん"3代目らしい"
          </h3>
          <p className="text-xl md:text-2xl font-medium" style={{ color: '#B8860B' }}>
            受け継ぎ、磨き、次へ。
          </p>
        </div>
      </div>

      {/* 企業理念セクション */}
      <div id="philosophy" className="relative bg-light/80 min-h-[50vh] flex items-center justify-center">
        <div className="container-custom py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: '#B8860B' }}>
              企業理念
            </h2>
            <div className="text-4xl md:text-6xl font-bold mb-8 leading-tight" style={{ color: '#B8860B' }}>
              三代で紡いだ技術を、<br />
              次の暮らしへ
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              創業以来、三代にわたり培ってきた確かな技術と経験。<br />
              私たちは、その伝統を守りながら、<br />
              常に新しい時代のニーズに応え続けています。<br />
              お客様一人ひとりの理想の暮らしを実現するために、<br />
              真摯に向き合い、心を込めた仕事をお届けします。
            </p>

            {/* 家づくりガイドへのリンク */}
            <div className="mt-12">
              <a
                href="/guide"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#B8860B' }}
              >
                <span>家づくりガイドを見る</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}