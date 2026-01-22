import { FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  {
    id: 1,
    name: 'A様',
    location: '岐阜市',
    project: 'リフォーム工事',
    comment: '三代続く信頼できる会社ということで依頼しました。職人さんの技術力が高く、細かい要望にも丁寧に対応していただきました。仕上がりには大変満足しています。',
  },
  {
    id: 2,
    name: 'B様',
    location: '各務原市',
    project: '新築工事',
    comment: '初めての家づくりで不安でしたが、名和社長が親身になって相談に乗ってくださり、理想以上の家が完成しました。アフターフォローも充実していて安心です。',
  },
  {
    id: 3,
    name: 'C様',
    location: '名古屋市',
    project: '店舗改装工事',
    comment: 'デザイン性と機能性を両立した提案をしていただきました。工期も予定通りで、スタッフの対応も素晴らしかったです。おかげさまで売上も向上しました。',
  },
  {
    id: 4,
    name: 'D様',
    location: '岐阜市',
    project: 'リフォーム工事',
    comment: '築30年の家をリフォームしましたが、新築のように生まれ変わりました。予算内で最大限の提案をしていただき、コストパフォーマンスも最高です。',
  },
]

export default function Voice() {
  return (
    <section id="voice" className="section-padding bg-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-secondary mb-4">お客様の声</h2>
          <p className="text-gray-600">
            実際にご依頼いただいたお客様からの喜びの声をご紹介します
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <FaQuoteLeft className="text-3xl text-accent mb-4" />
              <p className="text-gray-700 leading-relaxed mb-6">
                {testimonial.comment}
              </p>
              <div className="border-t pt-4">
                <p className="font-bold text-dark">{testimonial.name}</p>
                <p className="text-sm text-gray-600">
                  {testimonial.location} / {testimonial.project}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
