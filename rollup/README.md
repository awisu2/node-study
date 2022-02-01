# rollup-study

[rollup\.js](https://rollupjs.org/guide/en/)

ビルドツール

- browser 用には **webpack**、node.js のライブラリ用には **rollup** とかの使い分けらしい
  - よくわかってないけれど
- `npx rollup -c` が最小コマンドかな(コンフィグファイルが必要, -c は省略できなかった)
- _rollup.config.js_ で config が記載できる(default 名)
  - 詳細は後述
- [using plugins](https://rollupjs.org/guide/en/#using-plugins)
  - commonjs のプラグインを追加: [plugins/packages/commonjs at master · rollup/plugins](https://github.com/rollup/plugins/tree/master/packages/commonjs)
  - [Plugin Development](https://rollupjs.org/guide/en/#plugin-development)
- [rollup api](https://rollupjs.org/guide/en/#javascript-api): `rollup.rollup`, `rollup.watch` がありカスタマイズが可能

## hands up

```bash
npm install -D rollup
```

### コンパイル

--format オプションによりそれぞれに向けたコンパイルが可能

```bash
# for browser
npm run rollup src/main.js --file dist/browserBundle.js --format iife
# for node
npm run rollup src/main.js --file dist/nodeBundle.js --format cjs
# for umd (browser node)
npm run rollup src/main.js --file dist/umdBundle.js --format umd --name "myBundle"
```

note: [それぞれの出力結果](./docs/compiledResult.md)

## config 設定

公式(サンプルあり): [Configuration Files](https://rollupjs.org/guide/en/#configuration-files)

- 配列で export することで、複数の src 指定及び設定が可能
- typescript で書きたい場合: `--configPlugin typescript` とつける
- `(args) => rollupConfig` を export することで、args にコマンドラインの引数を取得して分岐が可能
