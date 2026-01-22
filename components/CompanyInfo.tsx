import { FaMapMarkerAlt, FaPhone, FaBuilding } from 'react-icons/fa'

export default function CompanyInfo() {
  return (
    <section id="company" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-secondary mb-4">企業情報</h2>
          <p className="text-gray-600">株式会社NAWAの会社概要</p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Column */}
            <div className="p-8 space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-2">会社名</h3>
                <p className="text-lg font-medium text-dark">株式会社NAWA</p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-2">代表者</h3>
                <p className="text-lg font-medium text-dark">代表取締役 名和 匠</p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-2">
                  <div className="flex items-center space-x-2">
                    <FaPhone className="text-primary" />
                    <span>電話番号</span>
                  </div>
                </h3>
                <a href="tel:058-271-4612" className="text-lg font-medium text-primary hover:text-primary/80">
                  058-271-4612
                </a>
              </div>
            </div>

            {/* Right Column */}
            <div className="p-8 bg-light space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-2">
                  <div className="flex items-center space-x-2">
                    <FaBuilding className="text-primary" />
                    <span>本社</span>
                  </div>
                </h3>
                <p className="text-base text-dark leading-relaxed">
                  〒500-8357<br />
                  岐阜県岐阜市六条大溝1丁目5−6
                </p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-2">
                  <div className="flex items-center space-x-2">
                    <FaMapMarkerAlt className="text-primary" />
                    <span>支店</span>
                  </div>
                </h3>
                <p className="text-base text-dark leading-relaxed">
                  〒460-0008<br />
                  愛知県名古屋市中区栄1丁目22番2号<br />
                  ライオンズ名古屋ビル
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
