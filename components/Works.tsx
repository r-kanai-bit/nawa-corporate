import Image from 'next/image'

const works = [
  {
    id: 1,
    title: 'ナチュラルモダン住宅',
    category: '新築',
    location: '岐阜市',
    projectName: '岐阜市カフェA',
    image: '/images/IMG_0697.jpg',
    description: '木製サッシと庭園が調和した外観デザイン'
  },
  {
    id: 2,
    title: 'オープンキッチン',
    category: 'リフォーム',
    location: '岐阜市',
    projectName: '岐阜市カフェB',
    image: '/images/IMG_0692.jpg',
    description: '見晴らしの良いカウンターキッチン'
  },
  {
    id: 3,
    title: '吹き抜けのリビング',
    category: '新築',
    location: '関市',
    projectName: '関市N様',
    image: '/images/IMG_0689.jpg',
    description: '開放感あふれる大空間設計'
  },
  {
    id: 4,
    title: 'モダン洗面室',
    category: 'リフォーム',
    location: '各務原市',
    projectName: '各務原市Y様リフォーム工事A',
    image: '/images/IMG_0693.jpg',
    description: 'シンプルで使いやすい水回り'
  },
  {
    id: 5,
    title: 'ナチュラルトイレ',
    category: 'リフォーム',
    location: '各務原市',
    projectName: '各務原市Y様リフォーム工事B',
    image: '/images/IMG_0696.jpg',
    description: '自然素材を活かした落ち着く空間'
  },
  {
    id: 6,
    title: 'インテリアデザイン',
    category: 'リフォーム',
    location: '各務原市',
    projectName: '各務原市Y様リフォーム工事C',
    image: '/images/IMG_0694.jpg',
    description: '機能的な室内空間設計'
  },
]

export default function Works() {
  return (
    <section id="works" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-secondary mb-4">施工事例</h2>
          <p className="text-gray-600">
            これまでに手がけた数多くの施工事例をご紹介します
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work) => (
            <div
              key={work.id}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                    {work.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                  {work.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {work.description}
                </p>
                <div className="border-t pt-3">
                  <p className="text-sm font-semibold text-primary">
                    現場名: {work.projectName}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary">
            もっと見る
          </button>
        </div>
      </div>
    </section>
  )
}
