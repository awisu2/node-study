# lodash-study

よくある面倒な処理を簡易にしてくれるモジュール lodash の勉强

- [Lodash](https://lodash.com/)
- api document: [Lodash Documentation](https://lodash.com/docs/4.17.15#findIndex)
- cdn: [lodash CDN by jsDelivr \- A CDN for npm and GitHub](https://www.jsdelivr.com/package/npm/lodash)

簡易説明

- 便利だけれど、どんな関数が用意されているかを知らないと使えないので、ちょいちょいドキュメントを見るのを推奨。
  - `cloneDeep`, `isXXX`(isNumber)がよく使いそうで, Array, Object, stringでめんどくさいと思った汎用処理は大抵の処理はある
- lodash の全機能は大きいため、分割して扱えるようになっている
  - 細かくは document 参照([Lodash Documentation](https://lodash.com/docs/4.17.15))
  - 各機能の大分類を catogory と言う
    - "array", "collection", "date", "function", "lang", "object", "number", "seq", "string", "util"
- cli でカスタムファイル生成も可能: [lodash-cli](./docs/lodash-cli.md) (cdnに頼りたくない、カスタム関数を含めたいときに)
  - ex: `lodash -p -m`
  - `template`オプションで自作関数を含めることも可能
- 基本的な使い方
  - `var _ = require('lodash')`　で、あとはドキュメントの関数を利用 `_.zip({any})`
  - 特定の機能(category)に絞る場合は `var array = require('lodash/array')`
    - この場合も関数名は変わらない
  - 自前でファイルが必要な場合は `lodash` コマンドで生成
- よく使いそうなメソッド(後述)
- その他
  - `lodash/core` は core 部分だけで軽いとのことだけれど具体的な範囲は不明(core 対象のドキュメントなし)
    - `lodash core modularize` でファイル生成し実態の確認可能
    - typescript だとコンパイルエラー(TODO：解消)

## docs

- [lodash-cli](./docs/lodash-cli.md): lodash コマンドのまとめ
- [methods](./docs/methods.md): メソッド一覧(ざっと機能を眺められるドキュメントがなかったので作成)

## getting start

node.js

```bash
yarn add -D lodash
# fot typescript
yarn add -D @types/lodash
```

```js
// 全機能利用可能
var _ = require('lodash')
// core部分だけ
var _ = require('lodash/core')
// arrayだけ
var array = require('lodash/array')

// zip(各配列の同じindex値でまとめた配列を返却)する
const ret = _.zip(['a', 'b'], [1, 2], [true, false])
//  or
const ret = array.zip(['a', 'b'], [1, 2], [true, false])
// ret => [['a', 1, true], ['b', 2, false]]
```

サンプル実行

```bash
yarn install
npm run build
```

## よく使いそうなメソッド

多分 core にまとまっているのだと思うけれど

- `isXXX` 系: typeof など書かずにすむ
- `cloneDeep`: 再起別変数の作成。適当関数(`JSON.parse(JSON.stringfy(v))`など)の回避
  - (派生で clone, cloneDeepWith なども)
- `random`
- `chain`: lodash の関数を繋げて利用
- `last`: 最後の 1 要素を取得
- `xxxCase`: camel, kebab, lower, snake, start, upper 各種ケースの文字列を生成
  - [Letter case \- Wikipedia](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage)
- `defaultsDeep`: set default value to object(deep).
