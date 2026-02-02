'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ReformGuideDownload() {
  const router = useRouter();

  const handleDownload = () => {
    // PDFを新しいタブで開かずにダウンロード
    const link = document.createElement('a');
    link.href = '/downloads/reform-guide.pdf';
    link.download = 'reform-guide.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="pt-16 min-h-screen bg-gray-50">
      {/* 戻るボタン */}
      <button
        onClick={() => router.back()}
        className="fixed top-20 left-4 z-40 flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-gray-700 hover:text-[#B8860B]"
        aria-label="戻る"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span className="text-sm font-medium">戻る</span>
      </button>

      {/* メインコンテンツ */}
      <section className="py-16 px-4">
        <div className="max-w-lg mx-auto">
          {/* カード */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            {/* PDFアイコン */}
            <div className="w-24 h-24 bg-[#B8860B]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-[#B8860B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>

            {/* タイトル */}
            <h1 className="text-2xl font-bold text-gray-900 mb-3">
              リフォーム価格帯ガイド
            </h1>
            <p className="text-sm text-gray-500 mb-2">PDF資料</p>

            {/* 説明 */}
            <div className="bg-gray-50 rounded-lg p-4 mb-8 text-left">
              <p className="text-gray-600 text-sm leading-relaxed">
                リフォームの種類・費用目安をまとめた資料です。水まわり、内装、外装、断熱など各種リフォームの価格帯がひと目で分かります。
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-500">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#B8860B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  リフォーム種類別の価格目安
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#B8860B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  工事の流れを分かりやすく解説
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#B8860B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  無料でダウンロード可能
                </li>
              </ul>
            </div>

            {/* ダウンロードボタン */}
            <button
              onClick={handleDownload}
              className="w-full inline-flex items-center justify-center px-8 py-4 bg-[#B8860B] text-white font-semibold rounded-lg hover:bg-[#996f0a] transition-all duration-300 shadow-md hover:shadow-lg mb-4"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              ダウンロードする
            </button>

            {/* 戻るリンク */}
            <button
              onClick={() => router.back()}
              className="w-full py-3 text-gray-500 hover:text-[#B8860B] transition text-sm"
            >
              ← 前のページに戻る
            </button>
          </div>

          {/* 補足情報 */}
          <p className="text-center text-xs text-gray-400 mt-6">
            ダウンロード後、ご不明点があればお気軽にご相談ください。
          </p>
        </div>
      </section>
    </main>
  );
}
