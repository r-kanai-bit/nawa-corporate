'use client';

import Link from 'next/link';

export default function GuideIndex() {
  const guides = [
    {
      href: '/guide/house-flow',
      title: '家づくりの流れ',
      desc: '相談からお引渡しまで、全体の流れをステップごとに解説',
      icon: '📋',
    },
    {
      href: '/guide/cost',
      title: '価格の考え方',
      desc: '住宅価格の構成要素や、予算の立て方を分かりやすく解説',
      icon: '💰',
    },
    {
      href: '/guide/faq',
      title: 'よくあるご質問',
      desc: 'お客様からよくいただく質問と回答をまとめました',
      icon: '❓',
    },
  ];

  return (
    <main className="font-serif">
      {/* ヘッダー */}
      <section className="bg-gradient-to-b from-gray-100 to-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">家づくりガイド</h1>
          <p className="text-gray-600">
            初めての家づくりでも安心。<br />
            知っておきたい情報をまとめました。
          </p>
        </div>
      </section>

      {/* ガイド一覧 */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {guides.map((guide, i) => (
              <Link
                key={i}
                href={guide.href}
                className="block p-6 border rounded-lg hover:shadow-md hover:border-[#B8860B] transition group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{guide.icon}</span>
                  <div>
                    <h2 className="text-xl font-bold group-hover:text-[#B8860B] transition">
                      {guide.title}
                    </h2>
                    <p className="text-gray-600 text-sm mt-1">{guide.desc}</p>
                  </div>
                  <span className="ml-auto text-gray-400 group-hover:text-[#B8860B] transition">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 mb-6">
            ガイドを読んでも分からないことがあれば、<br />
            お気軽にご相談ください。
          </p>
          <Link href="/consultation" className="inline-block bg-[#B8860B] text-white px-8 py-4 rounded font-bold hover:bg-[#996f0a] transition">
            無料相談を予約する
          </Link>
        </div>
      </section>
    </main>
  );
}
