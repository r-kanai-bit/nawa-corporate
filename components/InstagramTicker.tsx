'use client'
import { useState, useEffect } from 'react'

const announcements = [
  { tag: '最新', text: 'Instagramで施工事例・イベント情報を随時更新中！' },
  { tag: 'お知らせ', text: '完成見学会・住宅ローン相談会など各種イベント開催中' },
  { tag: 'フォロー', text: '@nawainc_since1946 で最新情報をチェック！' },
]

const igPosts = [
  { id: 1, caption: '施工事例', icon: '🏠' },
  { id: 2, caption: 'イベント情報', icon: '📢' },
  { id: 3, caption: '完成見学会', icon: '🏡' },
  { id: 4, caption: 'リフォーム事例', icon: '🔨' },
  { id: 5, caption: '住まいの知識', icon: '📖' },
  { id: 6, caption: '会社の日常', icon: '👷' },
]

export default function InstagramTicker() {
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAnnouncement(prev => (prev + 1) % announcements.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="instagram-info" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <defs>
                <linearGradient id="ig-grad" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0%" stopColor="#FFC107" />
                  <stop offset="50%" stopColor="#F44336" />
                  <stop offset="100%" stopColor="#9C27B0" />
                </linearGradient>
              </defs>
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#ig-grad)" strokeWidth="2" />
              <circle cx="12" cy="12" r="4.5" stroke="url(#ig-grad)" strokeWidth="2" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="url(#ig-grad)" />
            </svg>
            <h2 className="heading-secondary" style={{ letterSpacing: '0.1em' }}>
              インフォメーション
            </h2>
          </div>
          <p className="text-gray-600 text-sm">
            Instagramで最新の施工事例・イベント情報を発信しています
          </p>
        </div>

        {/* Ticker Announcement Bar */}
        <div className="bg-light border border-gray-200 rounded-lg py-2.5 px-4 flex items-center gap-3 overflow-hidden mb-8">
          <span className="flex-shrink-0 bg-accent text-white text-xs font-bold px-2 py-0.5 rounded">
            NEW
          </span>
          <div className="overflow-hidden flex-1">
            <div className="flex gap-8 whitespace-nowrap animate-ticker">
              {[...announcements, ...announcements].map((a, i) => (
                <span key={i} className="inline-flex items-center gap-2">
                  <span className="text-xs text-accent font-bold">{a.tag}</span>
                  <span className="text-sm text-dark">{a.text}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Instagram Post Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
          {igPosts.map(post => (
            <a
              key={post.id}
              href="https://www.instagram.com/nawainc_since1946/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-lg overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)' }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl mb-2">{post.icon}</span>
                <span className="text-sm font-medium text-gray-600">{post.caption}</span>
              </div>
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Follow Button */}
        <div className="text-center">
          <a
            href="https://www.instagram.com/nawainc_since1946/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-semibold hover:opacity-90 transition-opacity"
            style={{ background: 'linear-gradient(45deg, #FFC107, #F44336, #9C27B0)' }}
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            Instagramをフォローする
          </a>
        </div>
      </div>
    </section>
  )
}
