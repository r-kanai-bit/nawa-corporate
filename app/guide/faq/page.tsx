'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: '相談について',
      items: [
        {
          q: '土地がなくても相談できますか？',
          a: 'はい、もちろんです。土地探しからお手伝いできます。ご希望のエリアや予算をお聞かせください。不動産会社と連携して土地情報をご提案します。',
        },
        {
          q: '相談は無料ですか？',
          a: 'はい、ご相談・お見積りは無料です。プラン作成まで費用はかかりませんので、お気軽にご相談ください。',
        },
        {
          q: '相談したら契約しないといけませんか？',
          a: 'いいえ、その必要はありません。ご相談いただいた上で、他社と比較検討いただいて構いません。押し売りは一切いたしません。',
        },
        {
          q: 'オンラインでも相談できますか？',
          a: 'はい、Zoomを使ったオンライン相談に対応しています。遠方の方や、お子様がいて外出が難しい方にもご利用いただいています。',
        },
      ],
    },
    {
      category: '費用・住宅ローンについて',
      items: [
        {
          q: '予算○○万円で家は建てられますか？',
          a: '建物の大きさや仕様により変わります。規格住宅プランなら1,500万円台から、自由設計なら2,000万円台からご用意しています。詳しくはご相談ください。',
        },
        {
          q: '住宅ローンの相談もできますか？',
          a: 'はい、複数の金融機関と提携しており、お客様に最適なローンをご提案できます。事前審査の代行も無料で承ります。',
        },
        {
          q: '頭金はどのくらい必要ですか？',
          a: '頭金ゼロでも住宅ローンは組めます。ただし、諸費用（登記費用、ローン手数料など）として100〜200万円程度ご用意いただくと安心です。',
        },
      ],
    },
    {
      category: '家づくりについて',
      items: [
        {
          q: '打合せは何回くらいですか？',
          a: '規格住宅の場合は5〜8回程度、自由設計の場合は10〜15回程度が目安です。お客様のペースに合わせて進めますのでご安心ください。',
        },
        {
          q: '着工から完成まで何ヶ月かかりますか？',
          a: '一般的な住宅で4〜6ヶ月程度です。規格住宅は工期が短く、自由設計は仕様により変動します。',
        },
        {
          q: '建築中に現場を見ることはできますか？',
          a: 'はい、いつでもご見学いただけます。上棟式には必ずご参加いただき、構造をご確認いただいています。',
        },
      ],
    },
    {
      category: 'アフターサポートについて',
      items: [
        {
          q: '保証はありますか？',
          a: '住宅瑕疵担保責任保険（10年）に加入しています。また、当社独自の定期点検（1年・2年・5年・10年）を実施しています。',
        },
        {
          q: '建てた後のメンテナンスは？',
          a: '定期点検でメンテナンス時期をお知らせします。外壁塗装、屋根メンテナンス、設備交換など、長くお住まいいただくためのサポートをいたします。',
        },
        {
          q: '小さな修繕も頼めますか？',
          a: 'はい、建具の調整やクロスの補修など、小さなことでもお気軽にご連絡ください。お客様との関係は建てた後も続きます。',
        },
      ],
    },
  ];

  return (
    <main className="pt-16">
      {/* ヘッダー */}
      <section className="bg-gradient-to-b from-gray-100 to-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-gray-500 mb-2">GUIDE</p>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">よくあるご質問</h1>
          <p className="text-gray-600">
            お客様からよくいただくご質問をまとめました。<br />
            ご不明点があればお気軽にお問い合わせください。
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          {faqs.map((category, ci) => (
            <div key={ci} className="mb-10">
              <h2 className="text-lg font-bold mb-4 text-[#B8860B] border-b-2 border-[#B8860B] pb-2">
                {category.category}
              </h2>
              <div className="space-y-3">
                {category.items.map((faq, fi) => {
                  const index = ci * 100 + fi;
                  const isOpen = openIndex === index;
                  return (
                    <div key={fi} className="border rounded-lg overflow-hidden">
                      <button
                        className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-50 transition"
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                      >
                        <span className="font-medium flex items-center">
                          <span className="text-[#B8860B] mr-2 font-bold">Q.</span>
                          {faq.q}
                        </span>
                        <span className={`transform transition ${isOpen ? 'rotate-180' : ''}`}>
                          ▼
                        </span>
                      </button>
                      {isOpen && (
                        <div className="p-4 bg-gray-50 border-t">
                          <p className="text-gray-700 flex items-start">
                            <span className="text-gray-400 mr-2 font-bold">A.</span>
                            <span>{faq.a}</span>
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-bold mb-4">他にご質問はありませんか？</h2>
          <p className="text-gray-600 mb-8">
            ここにない質問も、お気軽にお問い合わせください。<br />
            担当者が丁寧にお答えします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consultation" className="bg-[#B8860B] text-white px-8 py-4 rounded font-bold hover:bg-[#996f0a] transition">
              無料相談を予約する
            </Link>
            <a href="tel:058-271-4612" className="border-2 border-[#B8860B] text-[#B8860B] px-8 py-4 rounded font-bold hover:bg-[#B8860B] hover:text-white transition">
              電話で問い合わせ
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
