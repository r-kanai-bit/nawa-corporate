import { FaHome, FaCalculator, FaFileAlt } from 'react-icons/fa'

const informationItems = [
  {
    icon: FaHome,
    title: '完成見学会',
    description: '実際の施工事例をご覧いただけます。理想の住まいづくりのヒントが見つかります。',
    color: 'bg-primary',
    calendarUrl: '#', // TODO: カレンダーリンクを設定
  },
  {
    icon: FaCalculator,
    title: '住宅ローン相談会',
    description: '専門スタッフが資金計画をサポート。安心して家づくりを始められます。',
    color: 'bg-accent',
    calendarUrl: '#', // TODO: カレンダーリンクを設定
  },
  {
    icon: FaFileAlt,
    title: '無料見積会',
    description: 'お気軽にご相談ください。経験豊富なスタッフが丁寧にお見積もりいたします。',
    color: 'bg-secondary',
    calendarUrl: '#', // TODO: カレンダーリンクを設定
  },
]

export default function Information() {
  return (
    <section id="information" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-secondary mb-4">インフォメーション</h2>
          <p className="text-gray-600">お客様のニーズに合わせた各種イベント・相談会を開催しています</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {informationItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`${item.color} p-6 text-white`}>
                <item.icon className="text-4xl mb-4" />
                <h3 className="text-2xl font-bold">{item.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
                <a
                  href={item.calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-primary font-medium hover:text-primary/80 transition-colors"
                >
                  詳しく見る →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
