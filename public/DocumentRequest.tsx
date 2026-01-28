'use client'

import { useState } from 'react'
import { FaFileDownload, FaHome, FaStore, FaPencilRuler, FaUser, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

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
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    postal: '',
    address: '',
    phone: '',
    email: '',
  })

  const handlePostalChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const postal = e.target.value.replace(/[^0-9]/g, '')
    setFormData(prev => ({ ...prev, postal }))

    if (postal.length === 7) {
      try {
        const response = await fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${postal}`)
        const data = await response.json()
        if (data.results) {
          const result = data.results[0]
          const address = `${result.address1}${result.address2}${result.address3}`
          setFormData(prev => ({ ...prev, address }))
        }
      } catch (error) {
        console.error('郵便番号検索エラー:', error)
      }
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('資料請求を承りました。ご登録いただいたメールアドレスに確認メールをお送りいたします。')
    setShowForm(false)
    setFormData({ name: '', postal: '', address: '', phone: '', email: '' })
  }

  if (showForm) {
    return (
      <section className="section-padding bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto bg-white rounded-lg p-8 text-gray-900">
            <h2 className="text-3xl font-bold mb-6 text-center">資料請求フォーム</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  氏名 <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    placeholder="山田 太郎"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  郵便番号 <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaMapMarkerAlt className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="postal"
                    required
                    value={formData.postal}
                    onChange={handlePostalChange}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    placeholder="5000000"
                    maxLength={7}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">ハイフンなし7桁で入力してください</p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  住所 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="block w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  placeholder="岐阜県岐阜市..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  電話番号 <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaPhone className="text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    placeholder="090-1234-5678"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 bg-gray-300 text-gray-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-400 transition-all"
                >
                  戻る
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all"
                >
                  送信する
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }

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
          <button
            onClick={() => setShowForm(true)}
            className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/90 transition-all duration-300 inline-flex items-center space-x-2"
          >
            <FaFileDownload className="text-xl" />
            <span>資料請求フォームへ</span>
          </button>
        </div>
      </div>
    </section>
  )
}
