# rollup-study

[rollup\.js](https://rollupjs.org/guide/en/)

ビルドツール

```bash
npm install -D rollup
```

## コンパイル

--format オプションによりそれぞれに向けたコンパイルが可能

```bash
# for browser
npm run rollup main.js --file dist/browserBundle.js --format iife
# for node
npm run rollup main.js --file dist/nodeBundle.js --format cjs
# for umd (browser node)
npm run rollup main.js --file dist/umdBundle.js --format umd --name "myBundle"
```

note: [それぞれの出力結果](./docs/compiledResult.md)
