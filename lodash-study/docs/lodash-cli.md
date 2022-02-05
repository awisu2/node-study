# lodash-cli

lodash の js ファイルを生成するコマンド

- [Lodash custom builds](https://lodash.com/custom-builds)
- [lodash\-cli \- npm](https://www.npmjs.com/package/lodash-cli)

大まかなせつめい

- `lodash xxx` で 特定の機能を持った _lodash.cutom.js_, _lodash.cutom.min.js_ が生成される
- 分割粒度はオプションの項を参照
- `template` オプションで、自前の関数を追加することが可能
- ヘルプを見る

```bash
npm install -g lodash-cli
lodash -h
```

- `lodash core`: lodash の core ファイルを作成 (lodash.custom.js, lodash.custom.min.js が生成される)
- `lodash strict`: lodash core の strict 版
- `lodash modularize`: modularize ディレクトリ内に各機能 module を分割して配置
  - 全機能をざっと見るのにも良いかも

## target

- `-h`: ヘルプ
- `-c`, `--stdout`: 出力を標準出力に
- `-o`, `--output`: 出力先ファイル指定
- `-m`, `--source-map`: sourcemap も生成
- `-d`, `--development`:
- `-p`, `--production`: 本番用。 .min を付与せず、minimaize 化したファイルのみを出力

## target

lodash コマンドで出力する対象を指定するオプション

- export: 対象の module を指定([module](../../docs/module.md))
  - “amd”, “commonjs”, “es”, “global”, “node”, “npm”, “none”, “umd”
- category: 出力する機能カテゴリ(カンマ区切り)
  - “array”, “collection”, “date”, “function”, “lang”, “object”, “number”, “seq”, “string”, “util”
- include: 出力する関数(カンマ区切り)
- minus: 除外する機能カテゴリまたは関数(カンマ区切り)
- template: 自前の関数を追加 (ex `lodash template="./hello*.js`)
- settings: template 用の設定？よくわからない
