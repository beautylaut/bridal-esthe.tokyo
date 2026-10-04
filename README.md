# BRIDAL ESTHE LAUT 静的サイト

Shopifyの公開コンテンツをHTML・CSS・最小限のJavaScriptに再構成したサイトです。画像はすべて `public/assets/images` に保存しています。

## ローカル確認

```sh
npm install
npm run build
npm run dev
```

http://localhost:3000 を開いてください。停止は Ctrl+C。

本文の編集は `public` 内の各ページの `index.html`、デザインは `public/assets/style.css` です。編集後は `npm run build` を実行し、ブラウザーを更新してください。

## 検証

```sh
npm run build
npm run typecheck
npm run lint
npm test
```

## Vercel

Framework Preset は Other、Build Command は `npm run build`、Output Directory は `dist`。設定は `vercel.json` にもあります。現在のページ・商品URLを維持しています。本番公開・独自ドメイン切り替えはまだ行っていません。

## 移行範囲

- HOME / ABOUT / SERVICE / COSME / CONTACT / FAQ / 返金・プライバシーポリシー
- 公開商品5点の詳細・価格・商品画像・説明
- Shopifyのテーマ、計測スクリプト、会員ログイン、検索、カート、決済、問い合わせフォームは除去
- 商品の購入相談・予約・問い合わせはLINEに接続
- 既存の外部店舗紹介リンクを維持、Googleマップはリンクとして掲載

取得日: 2026-10-04。文章・価格・ポリシーは既存公開情報を引き継いでいます。ポリシー本文中の旧サービスの記載も引き継いでいるため、本番公開前に新しい購入・問い合わせ運用に合わせて確認してください。

元サイトのLINEリンクには `TQHW3Hf` と `SfjKr7j` が混在していました。共通の予約・購入相談ボタンはトップページの `https://lin.ee/TQHW3Hf` を採用しています。本文にある既存リンクは保持しています。

`scripts/migrate.mjs` は初回変換用です。元HTMLは配信物・Gitに含めません。通常のビルドは変換済みの `public` だけを使い、Shopifyへの接続は不要です。
