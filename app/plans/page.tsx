'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// プラン定義
const plans = [
  {
    id: 'origin',
    name: 'NAWA ORIGIN',
    tagline: 'あなただけの、あなたのための家。',
    subtitle: '完全自由設計',
    description: '敷地の形状、ご家族の暮らし方、将来の夢──すべてをゼロから設計する、世界にひとつだけの住まい。NAWAの設計力と職人技術のすべてを、あなたの理想のために。',
    features: [
      '完全オーダーメイドの設計',
      '素材・仕様を自由に選択',
      '唯一無二のデザイン',
      '土地の特性を最大限活用'
    ],
    forWhom: [
      '明確な理想の住まい像をお持ちの方',
      '変形地や狭小地に建てたい方',
      '設計プロセスを楽しみたい方',
      '長期的な価値を重視される方'
    ],
    color: '#1a365d', // Deep navy
    accentColor: '#B8860B',
    image: '/images/IMG_0697.jpg'
  },
  {
    id: 'standard',
    name: 'NAWA STANDARD',
    tagline: 'いいとこどりの、自由と安心。',
    subtitle: 'セミオーダー住宅',
    description: 'NAWAが厳選した間取りベースをカスタマイズ。「ここは変えたい」「ここはお任せ」──ちょうどいいバランスで、効率よく理想の住まいを実現します。',
    features: [
      '厳選された間取りベース',
      '部分的なカスタマイズ可能',
      '計画的なコスト管理',
      '比較的短い工期'
    ],
    forWhom: [
      '初めての家づくりで安心感がほしい方',
      '忙しくて打ち合わせ時間に限りがある方',
      '予算と品質のバランスを重視する方',
      'ベースがあった方が想像しやすい方'
    ],
    color: '#2d3748', // Charcoal
    accentColor: '#B8860B',
    image: '/images/IMG_0693.jpg'
  },
  {
    id: 'concept',
    name: 'NAWA CONCEPT',
    tagline: '考え抜かれた、規格という選択。',
    subtitle: '規格住宅',
    description: 'NAWAが考え抜いた「最適解」をパッケージ化。規格だからこそ実現できる高品質と、明確な価格。迷わない家づくりという、新しい選択肢。',
    features: [
      '洗練されたデザインパッケージ',
      '明確な価格設定',
      'スピーディーな工程',
      '高い費用対効果'
    ],
    forWhom: [
      '決断をシンプルにしたい方',
      '明確な予算で進めたい方',
      'デザインはプロに任せたい方',
      '早く新居に住みたい方'
    ],
    color: '#374151', // Slate
    accentColor: '#B8860B',
    image: '/images/IMG_0694.jpg'
  }
]

export default function PlansPage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm tracking-[0.3em] text-gray-500 mb-4">NAWA HOUSING PLANS</p>
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            3つの家づくり
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            私たちは、すべてのお客様に「最適な家づくり」をお届けしたい。<br />
            だから、3つのアプローチをご用意しました。<br />
            優劣ではなく、あなたに合った「進め方」をお選びください。
          </p>
        </div>
      </section>

      {/* Comparison Note */}
      <section className="py-12 bg-amber-50 border-y border-amber-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-amber-400"></div>
            <span className="text-amber-700 text-sm tracking-wider">IMPORTANT</span>
            <div className="w-12 h-px bg-amber-400"></div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            3つのプランに<span className="font-semibold text-amber-800">優劣や価格差はありません</span>。<br />
            違いは「設計の自由度」と「進め方」だけ。<br />
            どのプランを選んでも、NAWAの品質と想いは変わりません。
          </p>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                onMouseEnter={() => setSelectedPlan(plan.id)}
                onMouseLeave={() => setSelectedPlan(null)}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={plan.image}
                    alt={plan.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 opacity-60 transition-opacity duration-500 group-hover:opacity-40"
                    style={{ backgroundColor: plan.color }}
                  ></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <p className="text-xs tracking-[0.2em] mb-2 opacity-80">{plan.subtitle}</p>
                    <h2 className="text-2xl font-light tracking-wider">{plan.name}</h2>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p
                    className="text-lg font-medium mb-4 text-center"
                    style={{ color: plan.accentColor }}
                  >
                    「{plan.tagline}」
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <p className="text-xs text-gray-500 tracking-wider mb-3">FEATURES</p>
                    <ul className="space-y-2">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <span
                            className="w-1.5 h-1.5 rounded-full mr-3"
                            style={{ backgroundColor: plan.accentColor }}
                          ></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* For Whom */}
                  <div className="mb-6">
                    <p className="text-xs text-gray-500 tracking-wider mb-3">こんな方に</p>
                    <ul className="space-y-2">
                      {plan.forWhom.map((item, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <span className="text-gray-400 mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <Link
                    href="/consultation"
                    className="block w-full py-3 text-center text-white rounded-lg transition-all duration-300 hover:opacity-90"
                    style={{ backgroundColor: plan.accentColor }}
                  >
                    このプランで相談する
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] text-gray-500 mb-4">PROCESS COMPARISON</p>
            <h2 className="text-3xl font-light text-gray-900">進め方の違い</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-4 px-4 text-left text-sm font-medium text-gray-500"></th>
                  <th className="py-4 px-4 text-center text-sm font-medium" style={{ color: plans[0].color }}>ORIGIN</th>
                  <th className="py-4 px-4 text-center text-sm font-medium" style={{ color: plans[1].color }}>STANDARD</th>
                  <th className="py-4 px-4 text-center text-sm font-medium" style={{ color: plans[2].color }}>CONCEPT</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 text-sm text-gray-600">設計の自由度</td>
                  <td className="py-4 px-4 text-center text-sm">完全自由</td>
                  <td className="py-4 px-4 text-center text-sm">カスタマイズ可</td>
                  <td className="py-4 px-4 text-center text-sm">パッケージ</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 text-sm text-gray-600">打ち合わせ回数</td>
                  <td className="py-4 px-4 text-center text-sm">多め（10回以上）</td>
                  <td className="py-4 px-4 text-center text-sm">標準（5〜8回）</td>
                  <td className="py-4 px-4 text-center text-sm">少なめ（3〜5回）</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 text-sm text-gray-600">設計期間の目安</td>
                  <td className="py-4 px-4 text-center text-sm">4〜6ヶ月</td>
                  <td className="py-4 px-4 text-center text-sm">2〜4ヶ月</td>
                  <td className="py-4 px-4 text-center text-sm">1〜2ヶ月</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 text-sm text-gray-600">価格の見通し</td>
                  <td className="py-4 px-4 text-center text-sm">要打ち合わせ</td>
                  <td className="py-4 px-4 text-center text-sm">概算提示可</td>
                  <td className="py-4 px-4 text-center text-sm">明確に提示</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-sm text-gray-600">おすすめの方</td>
                  <td className="py-4 px-4 text-center text-sm">こだわり派</td>
                  <td className="py-4 px-4 text-center text-sm">バランス派</td>
                  <td className="py-4 px-4 text-center text-sm">スピード派</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Common Quality Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm tracking-[0.3em] text-gray-500 mb-4">NAWA QUALITY</p>
          <h2 className="text-3xl font-light text-gray-900 mb-8">どのプランでも変わらないこと</h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-50 flex items-center justify-center">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">構造の安心</h3>
              <p className="text-sm text-gray-600">耐震等級3相当の設計基準。ご家族の安全を最優先に考えます。</p>
            </div>

            <div className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-50 flex items-center justify-center">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">自然素材</h3>
              <p className="text-sm text-gray-600">無垢材・珪藻土など、住む人にやさしい素材を標準採用。</p>
            </div>

            <div className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-50 flex items-center justify-center">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">アフターサポート</h3>
              <p className="text-sm text-gray-600">定期点検・メンテナンス対応。建てた後も末永くお付き合い。</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-light text-white mb-6">
            まずは、お話しましょう
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            「どのプランが自分に合うかわからない」<br />
            そんな方こそ、ぜひご相談ください。<br />
            お話を伺いながら、最適なプランを一緒に考えます。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/consultation"
              className="inline-flex items-center justify-center px-8 py-4 text-white rounded-lg transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: '#B8860B' }}
            >
              <span>無料相談を予約する</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/guide"
              className="inline-flex items-center justify-center px-8 py-4 text-white border border-white/30 rounded-lg transition-all duration-300 hover:bg-white/10"
            >
              <span>家づくりガイドを見る</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
