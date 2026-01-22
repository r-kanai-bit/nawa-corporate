import { FaFileDownload, FaHome, FaStore, FaPencilRuler } from 'react-icons/fa'

const documents = [
  {
    icon: FaHome,
    title: 'リフォーム・新築カタログ',
    description: '施工事例や価格の目安をまとめた総合カタログです',
  },
  {
    icon: FaStore,
    title: '店舗改装事例集',
    description: '店舗・オフィスの改装実績をご紹介します',
  },
  {
    icon: FaPencilRuler,
    title: '会社案内',
    description: '企業情報や施工の流れを詳しく掲載しています',
  },
]

export default function DocumentRequest() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary to-primary/80 text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">資料請求</h2>
          <p className="text-lg text-white/90">
            各種資料を無料でお送りいたします
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              <doc.icon className="text-4xl mb-4 text-accent" />
              <h3 className="text-xl font-bold mb-2">{doc.title}</h3>
              <p className="text-white/80 text-sm">
                {doc.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/90 transition-all duration-300 inline-flex items-center space-x-2">
            <FaFileDownload className="text-xl" />
            <span>資料請求フォームへ</span>
          </button>
        </div>
      </div>
    </section>
  )
}
