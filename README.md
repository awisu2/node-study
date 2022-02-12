# node-study

node についてのサンプルや勉强

- 開発用途であれば package.json に `"private": true` を追加しておく
- javascript には必要される機能が多く、長い歴史で多数の(先行/追加/独自)仕様が存在している
  - これら仕様を利用するため、利用可能な version に変換するビルドツールがこちらも多数存在する
    - 利用可能な version に落とす変換なので、コンパイルではなくトランスパイルと言うらしい
- [トランスパイル込の package を publish する場合の考察](./howToPublish)

## docs

- [module](./docs/module.md): what module (ESModules, CommonJs , Amd...etc), about the relationship between js and node.js
  - postscript: `default export` が避けられてきていることについて
- [how to publish](./howToPublish): how to npm package publish to npmjs.com
- [sourcemap](./docs/sourcemap.md): what is sourcemap
- [use strict](./docs/useStrict.md)

## codes

- [mocha](./mocha): unit test
- [gyp](./gyp): summary of study about node-gyp
- [childprocess](./childprocess): summary of study about node-gyp
- [os](./os): os モジュールを利用したサンプル
- [rollup\-study](https://github.com/awisu2/rollup-study): rollup の勉强まとめ
  - [./rollup](./rollup): rollup の簡易まとめ
- [process](./process): process の管理、強制終了、環境変数、コマンドライン引数、プロセス ID、動作プラットフォーム など
- [lodash](./lodash-study): lodsh のまとめ
- [regexp](./regexp-study): regexp (正規表現)のまとめ

### server

- [http](./http-study): node.js 標準 http server/request モジュール
- [express](./express-study): 老舗 saerver
- [NestJS \- A progressive Node\.js framework](https://nestjs.com/)
- [koajs/koa: Expressive middleware for node\.js using ES2017 async functions](https://github.com/koajs/koa)
- [Fastify, Fast and low overhead web framework, for Node\.js](https://www.fastify.io/)
- [AdonisJS \- A fully featured web framework for Node\.js](https://adonisjs.com/)
- [meteor](./meteor-study)
  - [] TOOD: ちゃちゃっと触るには重いので、必要になったら
