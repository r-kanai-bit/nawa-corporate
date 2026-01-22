import { FaHome, FaHammer, FaBuilding, FaStore, FaPencilRuler } from 'react-icons/fa'

const services = [
  {
    icon: FaHammer,
    title: 'リフォーム工事一式',
    description: '住宅のリノベーションから小規模な修繕まで、お客様のご要望に合わせた最適なリフォームをご提案します。',
  },
  {
    icon: FaHome,
    title: '新築工事一式',
    description: '土地探しから設計、施工まで一貫してサポート。理想の住まいを実現します。',
  },
  {
    icon: FaBuilding,
    title: '非住宅工事一式',
    description: 'オフィスビルや商業施設など、非住宅建築物の新築・改修工事を承ります。',
  },
  {
    icon: FaStore,
    title: '店舗改装工事',
    description: '飲食店、小売店など、店舗の新装・改装工事をトータルプロデュース。集客力のある空間づくりをサポートします。',
  },
  {
    icon: FaPencilRuler,
    title: '設計デザイン',
    description: '機能性とデザイン性を兼ね備えた空間設計。お客様の想いを形にする提案力が自慢です。',
  },
]

export default function Business() {
  return (
    <section id="business" className="section-padding bg-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-secondary mb-4">事業内容</h2>
          <p className="text-gray-600">
            幅広い建築ニーズにお応えします
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <service.icon className="text-3xl text-primary" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-6">
            その他、建築に関するご相談も承っております。<br />
            お気軽にお問い合わせください。
          </p>
          <a href="#contact" className="btn-primary inline-block">
            お問い合わせはこちら
          </a>
        </div>
      </div>
    </section>
  )
}
