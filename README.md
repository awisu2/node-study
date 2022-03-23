# node-study

node についてのサンプルや勉强

- 開発用途であれば package.json に `"private": true` を追加しておく
- javascript には必要される機能が多く、長い歴史で多数の(先行/追加/独自)仕様が存在している
  - これら仕様を利用するため、利用可能な version に変換するビルドツールがこちらも多数存在する
    - 利用可能な version に落とす変換なので、コンパイルではなくトランスパイルと言うらしい
- [トランスパイル込の package を publish する場合の考察](./howToPublish)

## summary

- [rough code](./roughCode/): for check syntax easy
- [awisu2/typescript\-study: summary of my typescript study](https://github.com/awisu2/typescript-study)

## docs

- [module](./docs/module.md): what module (ESModules, CommonJs , Amd...etc), about the relationship between javascript and node.js
  - postscript: `default export` が避けられてきていることについて
- [how to publish](./howToPublish): how to create & publish npm package to npmjs.com
- [sourcemap](./docs/sourcemap.md): what is sourcemap
- [use strict](./docs/useStrict.md): what use strict
- [history](./docs/history.md): browser's history control

## codes

- [array](./array-study): array
- [childprocess](./childprocess): summary of study about node-gyp
- [os](./os): os モジュールを利用したサンプル
- [process](./process): process の管理、強制終了、環境変数、コマンドライン引数、プロセス ID、動作プラットフォーム など
- [promise](./promise-study): summary of my promise study
- [regexp](./regexp-study): regexp (正規表現)のまとめ

## browser

- [mouseevent](./mouseevent-study/README.md): [js] get mouse position, up/down

### tools

- [lodash](./lodash-study): lodsh のまとめ

### test

- [mocha](./mocha): unit test

### transpile

- [rollup\-study](https://github.com/awisu2/rollup-study): rollup の勉强まとめ - [./rollup](./rollup): rollup の簡易まとめ

### server

- [http](./http-study): node.js 標準 http server/request モジュール
- [express](./express-study): long-established server
- [NestJS \- A progressive Node\.js framework](https://nestjs.com/)
- [koajs/koa: Expressive middleware for node\.js using ES2017 async functions](https://github.com/koajs/koa)
- [Fastify, Fast and low overhead web framework, for Node\.js](https://www.fastify.io/)
- [AdonisJS \- A fully featured web framework for Node\.js](https://adonisjs.com/)
- [meteor](./meteor-study)
  - [] TOOD: ちゃちゃっと触るには重いので、必要になったら

### universal

- [gyp](./gyp): summary of study about node-gyp

## samples

- [promisesUnderControl](./samples/promisesUnderControl.ts): Multiple promises with the specified number of concurrent executions
