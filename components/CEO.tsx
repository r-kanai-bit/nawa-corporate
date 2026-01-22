import Image from 'next/image'

export default function CEO() {
  return (
    <section id="ceo" className="section-padding bg-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-secondary mb-4">代表挨拶</h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            {/* CEO Image */}
            <div className="lg:col-span-2">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/ceo-photo.png"
                  alt="代表取締役 名和 匠"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-lg font-bold text-dark">代表取締役</p>
                <p className="text-2xl font-bold text-primary mt-2">名和 匠</p>
              </div>
            </div>

            {/* CEO Message */}
            <div className="lg:col-span-3">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-dark mb-6">
                  三代で紡いだ想いを、未来へ
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    高校卒業後、祖父が創業した当社に入社し、現場の最前線で技術を学びました。
                    職人としての基礎を築いた後、父の背中を見ながら経営を学び、
                    そして今、三代目として会社を引き継ぐこととなりました。
                  </p>
                  <p>
                    私たちが大切にしているのは、お客様との信頼関係です。
                    祖父の時代から変わらぬ「誠実な仕事」という理念を守りながら、
                    新しい技術やデザインを取り入れ、時代に合った住まいづくりを提供しています。
                  </p>
                  <p>
                    一つひとつの仕事に真摯に向き合い、お客様の理想を実現することで、
                    この地域に根ざした企業として、さらなる成長を目指してまいります。
                  </p>
                  <p className="text-right font-medium text-lg pt-4">
                    株式会社NAWA<br />
                    代表取締役 名和 匠
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
