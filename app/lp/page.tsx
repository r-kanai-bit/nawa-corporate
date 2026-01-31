'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function LPTop() {
  return (
    <main className="pt-16">
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-600 mb-4 tracking-widest">岐阜県で家を建てる方へ</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-relaxed">
            岐阜で家を建てる、<br />はじめの一歩。
          </h1>
          <p className="text-gray-700 mb-8 leading-relaxed">
            30〜40代・初めての家づくりを、<br className="md:hidden" />
            地域密着60年の工務店が応援します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consultation" className="bg-[#B8860B] text-white px-8 py-4 rounded hover:bg-[#996f0a] transition font-bold">
              無料相談を予約する
            </Link>
            <Link href="/lp/standard-house" className="border-2 border-[#B8860B] text-[#B8860B] px-8 py-4 rounded hover:bg-[#B8860B] hover:text-white transition font-bold">
              規格住宅プランを見る
            </Link>
          </div>
        </div>
      </section>

      {/* 3つの特徴 */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12 text-gray-900">NAWAが選ばれる3つの理由</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#B8860B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="font-bold mb-3 text-lg">相談しやすい</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                オンライン相談対応。<br />
                押し売りなし、まずはお話を聞かせてください。
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#B8860B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="font-bold mb-3 text-lg">価格が明確</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                規格住宅プランで価格が見える。<br />
                予算内で建てられるかすぐ分かります。
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#B8860B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="font-bold mb-3 text-lg">地域密着60年</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                三代続く技術と信頼。<br />
                建てた後も安心のアフターサポート。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* こんな方へ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">こんなお悩みありませんか？</h2>
          <div className="space-y-4">
            {[
              '何から始めればいいか分からない',
              '予算内で本当に建てられるか不安',
              'ハウスメーカーは押し売りされそうで怖い',
              '土地探しから相談したい',
              'ローンのことも一緒に考えたい',
            ].map((item, i) => (
              <div key={i} className="flex items-center bg-white p-4 rounded shadow-sm">
                <span className="text-[#B8860B] mr-3">✓</span>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-gray-600">
            ひとつでも当てはまる方、まずはお気軽にご相談ください。
          </p>
        </div>
      </section>

      {/* ガイドコンテンツへの導線 */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">家づくりを知る</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/guide/house-flow" className="block p-6 border rounded hover:shadow-md transition">
              <h3 className="font-bold mb-2">家づくりの流れ</h3>
              <p className="text-sm text-gray-600">初めての方も安心のステップガイド</p>
            </Link>
            <Link href="/guide/cost" className="block p-6 border rounded hover:shadow-md transition">
              <h3 className="font-bold mb-2">価格の考え方</h3>
              <p className="text-sm text-gray-600">家の価格がどう決まるか解説</p>
            </Link>
            <Link href="/guide/faq" className="block p-6 border rounded hover:shadow-md transition">
              <h3 className="font-bold mb-2">よくある質問</h3>
              <p className="text-sm text-gray-600">お客様からの疑問にお答えします</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#B8860B]">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-2xl font-bold mb-4">まずは無料相談から</h2>
          <p className="mb-8 opacity-90">
            オンラインでも来店でも、お気軽にご相談ください。<br />
            相談したからといって、契約を迫ることはありません。
          </p>
          <Link href="/consultation" className="inline-block bg-white text-[#B8860B] px-8 py-4 rounded font-bold hover:bg-gray-100 transition">
            無料相談を予約する
          </Link>
        </div>
      </section>
    </main>
  );
}
