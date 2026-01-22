'use client'

import { useState } from 'react'
import { FaUser, FaEnvelope, FaPhone, FaPencilAlt } from 'react-icons/fa'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // フォーム送信処理をここに実装
    console.log('Form submitted:', formData)
    alert('お問い合わせありがとうございます。担当者より折り返しご連絡させていただきます。')
  }

  return (
    <section id="contact" className="section-padding bg-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-secondary mb-4">お問い合わせ</h2>
          <p className="text-gray-600">
            お気軽にお問い合わせください。専門スタッフが丁寧に対応いたします
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    placeholder="山田 太郎"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  電話番号
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaPhone className="text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    placeholder="090-1234-5678"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  お問い合わせ種別 <span className="text-red-500">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="block w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                >
                  <option value="">選択してください</option>
                  <option value="reform">リフォームについて</option>
                  <option value="new">新築について</option>
                  <option value="store">店舗改装について</option>
                  <option value="estimate">見積もり依頼</option>
                  <option value="other">その他</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <FaPencilAlt className="text-gray-400" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    placeholder="お問い合わせ内容をご記入ください"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="btn-primary w-full md:w-auto px-12 py-4 text-lg"
                >
                  送信する
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-dark mb-4">お電話でのお問い合わせ</h3>
              <p className="text-3xl font-bold text-primary mb-2">058-271-4612</p>
              <p className="text-sm text-gray-600">受付時間: 平日 9:00 - 18:00</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-dark mb-4">メールでのお問い合わせ</h3>
              <p className="text-sm text-gray-600 mb-2">
                24時間受付中<br />
                担当者より2営業日以内にご連絡いたします
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
