'use client';

import { useState } from 'react';

export default function Consultation() {
  const [formData, setFormData] = useState({
    type: '',
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // フォーム送信処理
    alert('送信しました。担当者より折り返しご連絡いたします。');
  };

  return (
    <main className="font-serif">
      {/* ヘッダー */}
      <section className="bg-gradient-to-b from-gray-100 to-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">無料相談予約</h1>
          <p className="text-gray-600">
            まずは気軽にご相談ください。<br />
            相談したからといって、契約を迫ることはありません。
          </p>
        </div>
      </section>

      {/* 相談方法 */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-center mb-8">相談方法をお選びください</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { id: 'online', title: 'オンライン相談', desc: 'Zoomで自宅から相談', icon: '💻', time: '30分〜' },
              { id: 'visit', title: '来店相談', desc: '本社または支店で対面', icon: '🏢', time: '60分〜' },
              { id: 'tour', title: '見学会参加', desc: '完成物件を見学', icon: '🏠', time: '随時開催' },
            ].map((item) => (
              <label
                key={item.id}
                className={`block p-6 border-2 rounded-lg cursor-pointer transition ${
                  formData.type === item.id ? 'border-[#B8860B] bg-[#B8860B]/5' : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <input
                  type="radio"
                  name="type"
                  value={item.id}
                  checked={formData.type === item.id}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="sr-only"
                />
                <div className="text-center">
                  <span className="text-3xl mb-3 block">{item.icon}</span>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{item.desc}</p>
                  <p className="text-xs text-[#B8860B]">{item.time}</p>
                </div>
              </label>
            ))}
          </div>
        </div>
      </section>

      {/* 相談の流れ */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-center mb-8">ご相談の流れ</h2>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {[
              { step: '1', title: 'ご予約', desc: 'このフォームから' },
              { step: '2', title: '日程確認', desc: '担当者より連絡' },
              { step: '3', title: 'ご相談', desc: '30分〜60分程度' },
              { step: '4', title: 'ご提案', desc: '後日プラン提示' },
            ].map((item, i) => (
              <div key={i} className="flex items-center">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#B8860B] text-white rounded-full flex items-center justify-center font-bold mb-2">
                    {item.step}
                  </div>
                  <p className="font-bold text-sm">{item.title}</p>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
                {i < 3 && <span className="hidden md:block text-gray-300 mx-4">→</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* よくある相談内容 */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-center mb-6">よくある相談内容</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              '予算について相談したい',
              '土地探しから相談したい',
              '間取りの希望を伝えたい',
              '住宅ローンのことを聞きたい',
              '規格住宅と自由設計で迷っている',
              '建て替えを検討している',
            ].map((item, i) => (
              <div key={i} className="flex items-center p-3 bg-gray-50 rounded">
                <span className="text-[#B8860B] mr-2">●</span>
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 予約フォーム */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-center mb-8">ご予約フォーム</h2>
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">お名前 <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  required
                  className="w-full p-3 border rounded focus:ring-2 focus:ring-[#B8860B] focus:border-transparent"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">メールアドレス <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  required
                  className="w-full p-3 border rounded focus:ring-2 focus:ring-[#B8860B] focus:border-transparent"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">電話番号</label>
                <input
                  type="tel"
                  className="w-full p-3 border rounded focus:ring-2 focus:ring-[#B8860B] focus:border-transparent"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">ご希望日</label>
                  <input
                    type="date"
                    className="w-full p-3 border rounded focus:ring-2 focus:ring-[#B8860B] focus:border-transparent"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">ご希望時間</label>
                  <select
                    className="w-full p-3 border rounded focus:ring-2 focus:ring-[#B8860B] focus:border-transparent"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  >
                    <option value="">選択してください</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">ご相談内容・ご質問</label>
                <textarea
                  rows={4}
                  className="w-full p-3 border rounded focus:ring-2 focus:ring-[#B8860B] focus:border-transparent"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="気になること、聞きたいことなど自由にご記入ください"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#B8860B] text-white py-4 rounded font-bold hover:bg-[#996f0a] transition"
              >
                予約を送信する
              </button>
            </div>
          </form>
          <p className="text-center text-sm text-gray-500 mt-4">
            ※ 送信後、担当者より1営業日以内にご連絡いたします
          </p>
        </div>
      </section>
    </main>
  );
}
