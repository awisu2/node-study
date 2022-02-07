# module について

`import`や`require` などの別ファイルを読み込み、関係依存を解決する仕組みのこと

- javascript にはモジュールという仕組みがない(複数のファイルをグローバルに読み込むだけ)
- Node.js は javascript にモジュールの定義を持ち込んだもの(大雑把定義)
- ES Modules, CommonJS は module の仕様をまとめたもの
- ES Modules
  - 他の module 定義に比べ後発。これに統一されていきそう
  - .mjs という拡張子: ES Module を明確に表す拡張子として m が追加されている
  - ES Modules を html からロードする際は type="module" として宣言する
    - `<scpript type="module" src="js/module.js"></scriipt>`

## 経緯

1. javascript には、ほかファイルの読み込み(module 定義とその依存解決)機能がなかった
2. 2009 年 javascript がブラウザだけじゃなくてサーバ処理でもかければいいのに。と考え始めて動き始めた人たちがいた。ただサーバで動かすには色々足りない。モジュール定義や読み込みもない。標準入出力もない。File I/O もない。標準的に欲しいものが色々ない。
3. そのため考えられたのが、CommonJs(+Browserify)や AMD(+RequireJS)などの API 仕様
   - js に require, export などの module 仕様を盛り込んだ仕様。変換処理を挟んで js で利用できるようにしている
   - 前進として色々なオレオレ API があったとのこと。せっかくだから共有の API 仕様を決めようとなってこれらが考えられた
   - AMD はあまり利用されていない
4. 2015 年 ECMAScript の標準仕様として、ES Modules が考案された
   - ES Modules の呼び方: ES2015 Modules、ES6 Modules、ES Modules、ESM などいろいろある
   - 今後これに統一されていきそう

## その他

- CommonJs と Node.js
  - Node.js=CommonJS ではないが、Node.js の module システムとして CommonJS に準拠しているとのこと。
  - リリース直後は=っぽく見えていたが、Node.js は独自に仕様を拡張しているとのこと
- .mjs について: ES Modules を記す拡張子として制定された
  - commonjs がこれまで利用されていた経緯から、明示的に読み替えをするために追加された
  - commonjs に.cjs が用意されてもいるらしい。ただ、.js でも ok ということから使われないかなーと
- ES Modules を html からロードする際は type="module" として宣言する
  - `<scpript type="module" src="js/module.js"></scriipt>`

## default export が避けられてきていることについて

rollup で `export default` をすると警告が出る、rollup 的には named export を利用してくれとのこと。ちょっと調べた感じ根が深そうですが、全体的には named export 使ってくれとのこと。(named export で検索すると色々出てきます)

typescript でも, `default export` の結果を受け取る場合 `import * as anyModule from 'anyModule'` の用に記述する必要があり named export にしておいたほうがすんなり書ける感じ

default export 例

```js
export default function hello() {}
```

named export 例

```js
export function hello() {}
// or
export { hello }
```

## links

- [ブラウザで覚える ES Modules 入門 \- JavaScript でモジュールを使う時代 \- ICS MEDIA](https://ics.media/entry/16511/)
- [JavaScript のモジュール管理\(CommonJS とか AMD とか Browserify とか webpack\) \| tsuchikazu blog](https://tsuchikazu.net/javascript-module)
- [ES2015\(ES6\) 入門 \- Qiita](https://qiita.com/soarflat/items/b251caf9cb59b72beb9b)
