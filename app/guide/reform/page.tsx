'use client';

import Link from 'next/link';

export default function ReformGuide() {
  const reformTypes = [
    {
      title: '水まわりリフォーム',
      desc: 'キッチン・浴室・トイレ・洗面所など、毎日使う場所を快適に。',
      examples: ['システムキッチン交換', 'ユニットバス交換', 'トイレ交換', '洗面台交換'],
      priceRange: '50万円〜300万円',
    },
    {
      title: '内装リフォーム',
      desc: '床・壁・天井の張替えで、お部屋の印象を一新。',
      examples: ['フローリング張替え', 'クロス張替え', '畳からフローリングへ', '間取り変更'],
      priceRange: '30万円〜200万円',
    },
    {
      title: '外装リフォーム',
      desc: '外壁・屋根の塗装やメンテナンスで、家を長持ちさせる。',
      examples: ['外壁塗装', '屋根塗装', 'サイディング張替え', '雨樋交換'],
      priceRange: '80万円〜250万円',
    },
    {
      title: '断熱・省エネリフォーム',
      desc: '断熱性能を高めて、快適で光熱費を抑えた暮らしへ。',
      examples: ['窓の断熱（内窓・複層ガラス）', '壁・床の断熱', '高効率給湯器', '太陽光発電'],
      priceRange: '50万円〜500万円',
    },
    {
      title: 'バリアフリーリフォーム',
      desc: '手すり設置や段差解消で、安全で暮らしやすい住まいに。',
      examples: ['手すり設置', '段差解消', '引き戸への変更', '浴室の安全対策'],
      priceRange: '20万円〜150万円',
    },
    {
      title: 'フルリノベーション',
      desc: '間取りから設備まで一新。新築同様の住まいに生まれ変わる。',
      examples: ['スケルトンリフォーム', '間取り変更', '設備一新', '耐震補強'],
      priceRange: '500万円〜1500万円',
    },
  ];

  return (
    <main className="pt-16">
      {/* ヘッダー */}
      <section className="bg-gradient-to-b from-gray-100 to-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-gray-500 mb-2">GUIDE</p>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">リフォームをご検討の方へ</h1>
          <p className="text-gray-600">
            「そろそろ設備を新しくしたい」「もっと暮らしやすくしたい」<br />
            リフォームのご相談も、NAWAにお任せください。
          </p>
        </div>
      </section>

      {/* NAWAのリフォームの特徴 */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-center mb-8">NAWAのリフォームの特徴</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '🏠',
                title: '新築も手がける技術力',
                desc: '新築住宅の施工経験を活かした、確かな技術でリフォームを行います。',
              },
              {
                icon: '📋',
                title: '一貫した対応',
                desc: '相談から施工、アフターまで自社で一貫対応。責任を持ってお任せいただけます。',
              },
              {
                icon: '💰',
                title: '適正価格',
                desc: '必要な工事を適正価格で。過剰な提案や不要な工事は行いません。',
              },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-gray-50 rounded-lg">
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* リフォームの種類と価格目安 */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-center mb-8">リフォームの種類と価格目安</h2>
          <div className="space-y-4">
            {reformTypes.map((type, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-gray-900">{type.title}</h3>
                  <span className="text-sm font-semibold text-[#B8860B] bg-[#B8860B]/10 px-3 py-1 rounded">
                    {type.priceRange}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{type.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {type.examples.map((ex, j) => (
                    <span key={j} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-4 text-center">
            ※価格は目安です。実際の費用は現地調査後にお見積りいたします。
          </p>
        </div>
      </section>

      {/* リフォームの流れ */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-center mb-8">リフォームの流れ</h2>
          <div className="space-y-6">
            {[
              { step: '01', title: 'ご相談・ヒアリング', desc: 'お困りごとやご要望をお聞かせください。お電話・メール・ご来店、お好きな方法で。' },
              { step: '02', title: '現地調査', desc: '実際にご自宅を拝見し、現状を確認。最適なリフォームプランを検討します。' },
              { step: '03', title: 'プラン・お見積り', desc: '工事内容と費用を明確にご提示。ご納得いただけるまでご説明します。' },
              { step: '04', title: 'ご契約・着工', desc: 'ご契約後、工事スタート。工事中の生活にも配慮して進めます。' },
              { step: '05', title: '完成・お引渡し', desc: '仕上がりをご確認いただき、お引渡し。アフターサポートもお任せください。' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#B8860B] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PDFダウンロードセクション */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="border-2 border-dashed border-[#B8860B]/30 rounded-lg p-8 text-center bg-white">
            <div className="w-16 h-16 bg-[#B8860B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#B8860B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">リフォーム価格帯ガイドPDF</h3>
            <p className="text-gray-600 mb-6 text-sm">
              リフォームの種類・費用目安をまとめた資料です。<br />
              ご検討の参考にお使いください。
            </p>
            <a
              href="/downloads/reform-guide.pdf"
              download
              className="inline-flex items-center px-8 py-4 bg-[#B8860B] text-white font-semibold rounded-lg hover:bg-[#996f0a] transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              PDFをダウンロードする（無料）
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#B8860B]">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-2xl font-bold mb-4">まずは無料相談から</h2>
          <p className="mb-8 opacity-90">
            「どこをリフォームすればいい？」「費用はどのくらい？」<br />
            小さなお悩みでも、お気軽にご相談ください。
          </p>
          <Link href="/consultation" className="inline-block bg-white text-[#B8860B] px-8 py-4 rounded font-bold hover:bg-gray-100 transition">
            リフォーム相談を予約する
          </Link>
        </div>
      </section>
    </main>
  );
}
