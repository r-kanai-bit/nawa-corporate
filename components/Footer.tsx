import Link from 'next/link'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">株式会社NAWA</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              三代で紡いだ技術を、次の暮らしへ
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">お問い合わせ</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <FaPhone className="mt-1 text-accent" />
                <div>
                  <a href="tel:058-271-4612" className="hover:text-accent transition-colors">
                    058-271-4612
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Head Office */}
          <div>
            <h4 className="text-lg font-bold mb-4">本社</h4>
            <div className="flex items-start space-x-2 text-sm">
              <FaMapMarkerAlt className="mt-1 text-accent flex-shrink-0" />
              <p className="text-gray-300">
                〒500-8357<br />
                岐阜県岐阜市六条大溝1丁目5−6
              </p>
            </div>
          </div>

          {/* Branch */}
          <div>
            <h4 className="text-lg font-bold mb-4">支店</h4>
            <div className="flex items-start space-x-2 text-sm">
              <FaMapMarkerAlt className="mt-1 text-accent flex-shrink-0" />
              <p className="text-gray-300">
                〒460-0008<br />
                愛知県名古屋市中区栄1丁目22番2号<br />
                ライオンズ名古屋ビル
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} 株式会社NAWA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
