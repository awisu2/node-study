# node-study

node についてのサンプルや勉强

- 開発用途であれば package.json に `"private": true` を追加しておく
- javascript には必要される機能が多く、長い歴史で多数の(先行/追加/独自)仕様が存在している
  - これら仕様を利用するため、利用可能な version に変換するビルドツールがこちらも多数存在する
    - 利用可能な version に落とす変換なので、コンパイルではなくトランスパイルと言うらしい
- [トランスパイル込の package を publish する場合の考察](./howToPublish)

## docs

- [module](./docs/module.md): モジュールについて(ESModules, CommonJs , Amd など)、js と Node.js について
  - 追記: `default export` が避けられてきていることについて
- [how to publish](./howToPublish): パッケージのアップロードの仕方

## codes

- [mocha](./mocha): unit test
- [gyp](./gyp): node-gyp についての勉强
- [childprocess](./childprocess): node-gyp についての勉强
- [os](./os): os モジュールを利用したサンプル
- [rollup\-study](https://github.com/awisu2/rollup-study): rollup の勉强まとめ
  - [./rollup](./rollup): rollup の簡易まとめ
- [process](./process): process の管理、強制終了、環境変数、コマンドライン引数、プロセス ID、動作プラットフォーム など
- [lodash](./lodash-study): lodsh のまとめ
- [regexp](./regexp-study): regexp (正規表現)のまとめ

### server

- [http](./http-study): node.js 標準 http server/request モジュール
- [express](./express-study): 老舗 saerver
- [Meteor Software: A Platform to Build, Host, Deploy and Scale Full\-Stack Javascript Applications](https://www.meteor.com/)
- [NestJS \- A progressive Node\.js framework](https://nestjs.com/)
- [koajs/koa: Expressive middleware for node\.js using ES2017 async functions](https://github.com/koajs/koa)
- [Fastify, Fast and low overhead web framework, for Node\.js](https://www.fastify.io/)
- [AdonisJS \- A fully featured web framework for Node\.js](https://adonisjs.com/)
