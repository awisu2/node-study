# http-study

node.js 標準の http server 及びクライアントの勉強まとめ

- [入門ガイド \| Node\.js](https://nodejs.org/ja/docs/guides/getting-started-guide/)
- [HTTP \| Node\.js v17\.4\.0 Documentation](https://nodejs.org/api/http.html)

Note

- 大きく、Server と Request の機能を持ち。それらをサポートする Agent, ClientRequest, ServerResponse, IncomingMessage, OutgoingMessage で構成される
- サーバ用途では、html ファイルなどを返却しようとしたら _ファイル読み込み > 返却_ の用にベタな書き方になるのでフレームワークを使ったほうが楽
- http.METHODS, http.STATUS_CODES をコンスト値で保有

## sample

実行すると、http://localhost:3000 で Hello World が動作する

```js
const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
```
