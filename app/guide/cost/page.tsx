'use client';

import Link from 'next/link';

export default function CostGuide() {
  return (
    <main className="pt-16">
      {/* ヘッダー */}
      <section className="bg-gradient-to-b from-gray-100 to-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-gray-500 mb-2">GUIDE</p>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">家の価格、どう決まる？</h1>
          <p className="text-gray-600">
            「坪単価」だけでは分からない、<br />
            住宅価格の仕組みを分かりやすく解説します。
          </p>
        </div>
      </section>

      {/* 住宅価格の構成 */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-center mb-8">住宅価格の構成要素</h2>
          <div className="space-y-4">
            {[
              { title: '本体工事費', ratio: '70〜75%', desc: '建物本体の工事費用。基礎、構造、屋根、外壁、内装など。', color: '#B8860B' },
              { title: '付帯工事費', ratio: '15〜20%', desc: '外構、給排水、電気引込、地盤改良など建物以外の工事。', color: '#D4A574' },
              { title: '諸費用', ratio: '5〜10%', desc: '登記費用、ローン手数料、火災保険、引越し費用など。', color: '#8B7355' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <span className="text-lg font-bold" style={{ color: item.color }}>{item.ratio}</span>
                </div>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
            <p className="text-sm text-yellow-800">
              <strong>注意：</strong>広告の「坪単価○○万円」は本体工事費のみの場合が多いです。
              総額で比較することが大切です。
            </p>
          </div>
        </div>
      </section>

      {/* 予算の考え方 */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-center mb-8">予算の考え方</h2>
          <div className="bg-white p-6 rounded-lg">
            <h3 className="font-bold mb-4">年収から考える住宅ローンの目安</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3 text-left">世帯年収</th>
                    <th className="p-3 text-center">借入目安</th>
                    <th className="p-3 text-center">月々返済目安</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3">400万円</td>
                    <td className="p-3 text-center">2,000〜2,800万円</td>
                    <td className="p-3 text-center">約6〜8万円</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">500万円</td>
                    <td className="p-3 text-center">2,500〜3,500万円</td>
                    <td className="p-3 text-center">約7〜10万円</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">600万円</td>
                    <td className="p-3 text-center">3,000〜4,200万円</td>
                    <td className="p-3 text-center">約9〜12万円</td>
                  </tr>
                  <tr>
                    <td className="p-3">700万円</td>
                    <td className="p-3 text-center">3,500〜4,900万円</td>
                    <td className="p-3 text-center">約10〜14万円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              ※借入目安は年収の5〜7倍、返済負担率25〜30%で算出。金利・返済期間により変動します。
            </p>
          </div>
        </div>
      </section>

      {/* よくある誤解 */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-center mb-8">よくある誤解</h2>
          <div className="space-y-4">
            {[
              {
                wrong: '坪単価だけで比較できる',
                right: '坪単価の計算方法は各社バラバラ。総額で比較しましょう。',
              },
              {
                wrong: '広告の価格＝総額',
                right: '広告価格は本体工事費のみの場合が多い。付帯工事・諸費用も確認を。',
              },
              {
                wrong: '頭金がないと建てられない',
                right: '頭金ゼロでも住宅ローンは組めます。ただし諸費用分は用意が望ましい。',
              },
              {
                wrong: '安ければ安いほど良い',
                right: '安さの理由を確認。将来のメンテナンスコストも考慮しましょう。',
              },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-5 rounded-lg">
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <p className="line-through text-gray-500">{item.wrong}</p>
                </div>
                <div className="flex items-start gap-3 ml-6">
                  <span className="text-[#B8860B] font-bold">◯</span>
                  <p className="text-gray-700">{item.right}</p>
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
            <h3 className="text-xl font-bold text-gray-900 mb-2">価格帯ガイドPDF</h3>
            <p className="text-gray-600 mb-6 text-sm">
              「だいたいいくら？」が分かる資料です。<br />
              住宅ローンの事前相談にもお使いいただけます。
            </p>
            <a
              href="/downloads/price-guide.pdf"
              download
              className="inline-flex items-center px-8 py-4 bg-[#B8860B] text-white font-semibold rounded-lg hover:bg-[#996f0a] transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              PDFをダウンロードする（無料）
            </a>
            <p className="text-xs text-gray-500 mt-4">
              ※ダウンロード後、ご不明点があればお気軽にご相談ください。
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#B8860B]">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-2xl font-bold mb-4">具体的な資金相談はプロに</h2>
          <p className="mb-8 opacity-90">
            「自分の年収でいくら借りられる？」<br />
            「月々の返済はいくらになる？」<br />
            ファイナンシャルプランナー資格を持つスタッフがお答えします。
          </p>
          <Link href="/consultation" className="inline-block bg-white text-[#B8860B] px-8 py-4 rounded font-bold hover:bg-gray-100 transition">
            資金相談を予約する
          </Link>
        </div>
      </section>
    </main>
  );
}
