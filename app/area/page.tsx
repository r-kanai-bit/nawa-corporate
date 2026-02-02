'use client'

import BackButton from '@/components/BackButton'

// エリアデータの定義
const areas = [
  {
    prefecture: '愛知県',
    prefectureEn: 'AICHI',
    regions: [
      { name: '尾張エリア', description: '一宮市、稲沢市、清須市、北名古屋市、岩倉市、江南市、犬山市、扶桑町、大口町 など' },
      { name: '名古屋エリア', description: '名古屋市全域' },
    ],
    note: '距離により、諸経費発生の可能性あり',
    color: '#1a365d',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  {
    prefecture: '岐阜県',
    prefectureEn: 'GIFU',
    regions: [
      { name: '岐阜エリア', description: '岐阜市、各務原市、羽島市、瑞穂市、本巣市、山県市 など' },
      { name: '中濃エリア', description: '関市、美濃市、美濃加茂市、可児市 など' },
      { name: '西濃エリア', description: '大垣市、海津市、養老町、垂井町、関ケ原町 など' },
      { name: '東濃エリア', description: '多治見市、土岐市、瑞浪市、恵那市、中津川市 など' },
    ],
    note: '距離により、諸経費発生の可能性あり',
    color: '#065f46',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
  },
]

export default function AreaPage() {
  return (
    <div className="min-h-screen bg-white">
      <BackButton />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm tracking-[0.3em] text-gray-500 mb-4">SERVICE AREA</p>
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            施工エリア
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            株式会社NAWAの施工対応エリアをご案内いたします。<br />
            下記エリア以外でも対応可能な場合がございますので、<br className="hidden md:block" />
            お気軽にお問い合わせください。
          </p>
        </div>
      </section>

      {/* Area Cards Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="space-y-8 md:space-y-12">
            {areas.map((area) => (
              <div
                key={area.prefecture}
                className={`rounded-2xl overflow-hidden shadow-lg border ${area.borderColor}`}
              >
                {/* Prefecture Header */}
                <div
                  className="py-6 px-6 md:px-8 text-white"
                  style={{ backgroundColor: area.color }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs tracking-[0.2em] opacity-80 mb-1">{area.prefectureEn}</p>
                      <h2 className="text-2xl md:text-3xl font-light tracking-wider">{area.prefecture}</h2>
                    </div>
                    <div className="hidden md:block">
                      <svg className="w-12 h-12 opacity-30" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Regions */}
                <div className={`${area.bgColor} p-6 md:p-8`}>
                  <div className="grid gap-4 md:gap-6">
                    {area.regions.map((region, idx) => (
                      <div
                        key={region.name}
                        className="bg-white rounded-xl p-4 md:p-6 shadow-sm"
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                            style={{ backgroundColor: area.color }}
                          ></div>
                          <div>
                            <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-2">
                              {region.name}
                            </h3>
                            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                              {region.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Note */}
                  <div className="mt-6 flex items-start gap-2 text-sm text-gray-500">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p>※ {area.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section (Optional Visual) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-px bg-[#B8860B]"></div>
            <span className="text-[#B8860B] text-sm tracking-wider">COVERAGE</span>
            <div className="w-12 h-px bg-[#B8860B]"></div>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              {/* Aichi */}
              <div className="text-center">
                <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-3xl md:text-4xl font-light text-blue-800">愛知</span>
                </div>
                <p className="text-sm text-gray-600">尾張・名古屋</p>
              </div>

              {/* Plus sign */}
              <div className="text-4xl text-gray-300 font-light">+</div>

              {/* Gifu */}
              <div className="text-center">
                <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 rounded-full bg-emerald-100 flex items-center justify-center">
                  <span className="text-3xl md:text-4xl font-light text-emerald-800">岐阜</span>
                </div>
                <p className="text-sm text-gray-600">岐阜・中濃・西濃・東濃</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-light text-white mb-6">
            エリア外でもお気軽にご相談ください
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed text-sm md:text-base">
            上記エリア以外でも、施工可能な場合がございます。<br />
            まずはお気軽にお問い合わせください。
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-white rounded-lg transition-all duration-300 hover:opacity-90"
            style={{ backgroundColor: '#B8860B' }}
          >
            <span>お問い合わせはこちら</span>
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  )
}
