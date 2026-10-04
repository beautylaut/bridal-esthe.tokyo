# 開発ルール

- 実装前にプランを提示し、ユーザー承認後に着手する。
- コード変更後にビルド・型チェック・lintを実行する。
- テストは変更に関連するものだけを実行する。
- 破壊的変更前はコミットでセーフポイントを作る。
- 各タスクのステップ完了時にgit commitする。日本語メッセージ可。

## コマンド

- `npm run build`: publicをdistへ出力
- `npm run dev`: http://localhost:3000
- `npm run typecheck`: 配信サーバーとブラウザー用JavaScriptの型チェック
- `npm run lint`: JavaScriptのlint
- `npm test`: 移行したページの内部参照と構造の検証

## 構成

- public/: 配信するHTML・画像・CSS
- scripts/: ビルド・ローカル起動・移行・検証
- migration/: 素材の移行記録（sourceはGit対象外）
- vercel.json: Vercelの静的サイト設定
