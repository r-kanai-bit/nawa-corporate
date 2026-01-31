'use client';

import Link from 'next/link';

export default function StandardHouse() {
  return (
    <main className="font-serif">
      {/* ヒーロー */}
      <section className="bg-gradient-to-b from-gray-100 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-600 mb-4 tracking-widest">NAWA STANDARD HOUSE</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            選べる規格住宅プラン
          </h1>
          <p className="text-gray-700 leading-relaxed">
            価格が見える。打合せがスムーズ。<br />
            初めての家づくりに最適な住宅プランです。
          </p>
        </div>
      </section>

      {/* 規格住宅とは */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">規格住宅とは？</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="text-gray-700 leading-relaxed mb-6">
              規格住宅とは、あらかじめ設計されたプランから選ぶ住宅のことです。
              自由設計と比べて以下のメリットがあります。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: '価格が明確', desc: '事前に総額が分かるので予算が立てやすい' },
                { title: '打合せ回数が少ない', desc: 'プランが決まっているので時間を節約' },
                { title: '工期が短い', desc: '標準化により効率的な施工が可能' },
                { title: '品質が安定', desc: '実績あるプランで安心の品質' },
              ].map((item, i) => (
                <div key={i} className="bg-white p-4 rounded shadow-sm">
                  <h3 className="font-bold text-[#B8860B] mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* プラン例 */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4">プラン例</h2>
          <p className="text-center text-gray-600 mb-8">お客様のライフスタイルに合わせてお選びいただけます</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: '平屋プラン', size: '25〜30坪', price: '1,800万円〜', desc: 'ワンフロアで暮らしやすい' },
              { name: '2階建てプラン', size: '30〜35坪', price: '2,200万円〜', desc: '家族4人にちょうどいい' },
              { name: 'コンパクトプラン', size: '20〜25坪', price: '1,500万円〜', desc: '夫婦二人に最適' },
            ].map((plan, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{plan.size}</p>
                <p className="text-2xl font-bold text-[#B8860B] mb-3">{plan.price}</p>
                <p className="text-sm text-gray-600">{plan.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">
            ※価格は参考価格です。土地・諸費用は別途。詳細はご相談ください。
          </p>
        </div>
      </section>

      {/* 自由設計との比較 */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">自由設計との比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-4 text-left border"></th>
                  <th className="p-4 text-center border bg-[#B8860B]/10">規格住宅</th>
                  <th className="p-4 text-center border">自由設計</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border font-medium">価格の分かりやすさ</td>
                  <td className="p-4 border text-center text-[#B8860B] font-bold">◎ 明確</td>
                  <td className="p-4 border text-center">△ 変動あり</td>
                </tr>
                <tr>
                  <td className="p-4 border font-medium">打合せ回数</td>
                  <td className="p-4 border text-center text-[#B8860B] font-bold">◎ 少ない</td>
                  <td className="p-4 border text-center">△ 多い</td>
                </tr>
                <tr>
                  <td className="p-4 border font-medium">間取りの自由度</td>
                  <td className="p-4 border text-center">○ 選択式</td>
                  <td className="p-4 border text-center">◎ 完全自由</td>
                </tr>
                <tr>
                  <td className="p-4 border font-medium">工期</td>
                  <td className="p-4 border text-center text-[#B8860B] font-bold">◎ 短い</td>
                  <td className="p-4 border text-center">△ 長め</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 施工事例リンク */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">施工事例を見る</h2>
          <p className="text-gray-600 mb-8">実際に建てたお客様の事例をご覧ください</p>
          <Link href="/#works" className="inline-block border-2 border-[#B8860B] text-[#B8860B] px-8 py-4 rounded font-bold hover:bg-[#B8860B] hover:text-white transition">
            施工事例ページへ
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#B8860B]">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-2xl font-bold mb-4">規格住宅について相談する</h2>
          <p className="mb-8 opacity-90">
            「このプランで建てられる？」「価格をもっと詳しく知りたい」<br />
            どんな質問でもお気軽にご相談ください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consultation" className="inline-block bg-white text-[#B8860B] px-8 py-4 rounded font-bold hover:bg-gray-100 transition">
              無料相談を予約する
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
