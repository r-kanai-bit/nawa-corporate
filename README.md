# 株式会社NAWA コーポレートサイト

Next.js 14で構築された株式会社NAWAのコーポレートサイトです。

## 機能

- **カルーセル**: 実際の施工事例を自動でスライド表示
- **企業理念**: 三代で紡いだ技術を次の暮らしへ
- **企業情報**: 会社概要と連絡先
- **事業内容**: リフォーム、新築、店舗改装など5つの事業
- **インフォメーション**: 完成見学会、住宅ローン相談会、無料見積会
- **代表挨拶**: 代表取締役 名和 匠のメッセージ
- **施工事例**: 実際の施工事例を紹介
- **お客様の声**: 実際のお客様からの評価
- **資料請求**: 各種カタログのダウンロード
- **お問い合わせフォーム**: お客様からの問い合わせを受付
- **SNS連携**: Instagram、LINEへのリンク

## ヘッダーナビゲーション

### 左側メニュー
- 代表紹介
- 企業情報
- 施工事例
- 事業内容
- 企業理念

### 右側アイコン（縦列）
- Instagramアイコン
- LINEアイコン
- お問い合わせアイコン

## 技術スタック

- **フレームワーク**: Next.js 14 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **アイコン**: React Icons
- **画像最適化**: Next.js Image

## セットアップ

### 前提条件

- Node.js 18以上
- npm または yarn

### インストール

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

ブラウザで `http://localhost:3000` を開いてください。

### ビルド

```bash
# 本番用ビルド
npm run build

# 本番サーバーの起動
npm start
```

## プロジェクト構造

```
nawa-corporate/
├── app/
│   ├── layout.tsx          # ルートレイアウト
│   ├── page.tsx            # メインページ
│   └── globals.css         # グローバルスタイル
├── components/
│   ├── Header.tsx          # ヘッダー（ナビゲーション・SNS）
│   ├── Footer.tsx          # フッター
│   ├── Carousel.tsx        # カルーセル
│   ├── BackgroundSection.tsx # 背景画像セクション
│   ├── Philosophy.tsx      # 企業理念
│   ├── CompanyInfo.tsx     # 企業情報
│   ├── Business.tsx        # 事業内容
│   ├── Information.tsx     # インフォメーション
│   ├── CEO.tsx             # 代表挨拶
│   ├── Works.tsx           # 施工事例
│   ├── Voice.tsx           # お客様の声
│   ├── DocumentRequest.tsx # 資料請求
│   └── ContactForm.tsx     # お問い合わせフォーム
├── public/
│   └── images/             # 施工事例画像・ロゴ
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

## 画像について

`public/images/` フォルダに以下の画像が含まれています:
- work-01.jpg ~ work-05.jpg: 施工事例画像
- IMG_0685.JPG: 会社ロゴ

新しい画像を追加する場合は、同じディレクトリに配置してください。

## カスタマイズ

### 色の変更

`tailwind.config.js` で以下のカラーパレットを編集できます:

```javascript
colors: {
  primary: '#2C5F2D',    // メインカラー（緑）
  secondary: '#97BC62',  // セカンダリカラー（ライトグリーン）
  accent: '#D4A574',     // アクセントカラー（ベージュ）
  dark: '#1F1F1F',       // ダークカラー
  light: '#F5F5F5',      // ライトカラー
}
```

### SNSリンクの変更

`components/Header.tsx` でInstagramとLINEのリンクを編集できます。

### コンテンツの編集

各コンポーネントファイルを編集して、テキストやデータを更新できます。

## デプロイ

### Vercel (推奨)

1. GitHubリポジトリにプッシュ
2. Vercelでインポート
3. 自動デプロイが開始されます

### その他のプラットフォーム

Next.js 14は様々なプラットフォームにデプロイできます:
- Netlify
- AWS Amplify
- Google Cloud
- 自社サーバー

## ライセンス

© 2024 株式会社NAWA. All rights reserved.

## お問い合わせ

- 電話: 058-271-4612
- Instagram: https://www.instagram.com/nawa.kentiku
- 本社: 〒500-8357 岐阜県岐阜市六条大溝1丁目5−6
- 支店: 〒460-0008 愛知県名古屋市中区栄1丁目22番2号 ライオンズ名古屋ビル
