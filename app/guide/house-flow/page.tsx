'use client';

import Link from 'next/link';

export default function HouseFlow() {
  const steps = [
    {
      num: '01',
      title: '情報収集・ご相談',
      duration: '1〜2ヶ月',
      desc: '家づくりの第一歩。どんな家に住みたいか、予算はどのくらいか、まずはイメージを膨らませましょう。',
      points: ['住宅展示場・見学会への参加', '資料請求・情報収集', '工務店への相談（無料）'],
    },
    {
      num: '02',
      title: '土地探し・資金計画',
      duration: '1〜3ヶ月',
      desc: '土地をお持ちでない方は土地探しから。同時に、住宅ローンの事前審査も進めます。',
      points: ['土地の選定・購入', '住宅ローン事前審査', '資金計画の作成'],
    },
    {
      num: '03',
      title: 'プラン作成・お見積り',
      duration: '1〜2ヶ月',
      desc: 'ご要望をヒアリングし、間取りプランと概算見積りを作成します。納得いくまで何度でも打合せします。',
      points: ['ヒアリング・要望整理', '間取りプラン作成', '概算見積り提示'],
    },
    {
      num: '04',
      title: 'ご契約',
      duration: '約1ヶ月',
      desc: 'プラン・見積りにご納得いただけたら、正式にご契約となります。',
      points: ['最終プラン確定', '本見積り・ご契約', '住宅ローン本審査'],
    },
    {
      num: '05',
      title: '着工〜完成',
      duration: '4〜6ヶ月',
      desc: 'いよいよ工事開始。地鎮祭、上棟式を経て、夢のマイホームが形になっていきます。',
      points: ['地鎮祭・着工', '上棟・構造検査', '内装・設備工事'],
    },
    {
      num: '06',
      title: 'お引渡し・アフターサポート',
      duration: '〜',
      desc: '完成検査後、鍵のお引渡し。建てた後も、定期点検とアフターサポートで安心です。',
      points: ['完成検査・お引渡し', '定期点検（1年・2年・5年・10年）', 'メンテナンス対応'],
    },
  ];

  return (
    <main className="font-serif">
      {/* ヘッダー */}
      <section className="bg-gradient-to-b from-gray-100 to-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-gray-500 mb-2">GUIDE</p>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">家づくりの流れ</h1>
          <p className="text-gray-600">
            初めての方も安心。<br />
            家づくりの全体像をステップごとに解説します。
          </p>
        </div>
      </section>

      {/* 全体スケジュール */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#B8860B]/10 p-6 rounded-lg text-center">
            <p className="text-sm text-gray-600 mb-2">ご相談からお引渡しまで</p>
            <p className="text-3xl font-bold text-[#B8860B]">約8〜12ヶ月</p>
            <p className="text-sm text-gray-500 mt-2">※土地探しの期間により変動します</p>
          </div>
        </div>
      </section>

      {/* ステップ詳細 */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#B8860B] text-white rounded-full flex items-center justify-center">
                      <span className="text-xl font-bold">{step.num}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold">{step.title}</h3>
                      <span className="text-sm text-[#B8860B] bg-[#B8860B]/10 px-2 py-1 rounded">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{step.desc}</p>
                    <ul className="space-y-1">
                      {step.points.map((point, j) => (
                        <li key={j} className="text-sm text-gray-500 flex items-center">
                          <span className="text-[#B8860B] mr-2">✓</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#B8860B]">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-2xl font-bold mb-4">まずはSTEP1から始めましょう</h2>
          <p className="mb-8 opacity-90">
            家づくりは情報収集から。<br />
            無料相談で、あなたの家づくりの第一歩をサポートします。
          </p>
          <Link href="/consultation" className="inline-block bg-white text-[#B8860B] px-8 py-4 rounded font-bold hover:bg-gray-100 transition">
            無料相談を予約する
          </Link>
        </div>
      </section>
    </main>
  );
}
