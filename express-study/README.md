# express-study

express の勉強まとめ

- [Express \- Node\.js Web アプリケーション・フレームワーク](https://expressjs.com/ja/)
- [Express アプリケーションで使用するミドルウェアの作成](https://expressjs.com/ja/guide/writing-middleware.html)
- [Express 4\.x \- API リファレンス](https://expressjs.com/ja/4x/api.html)

NOTE

- routing: [Express でのルーティング](https://expressjs.com/ja/guide/routing.html)
  - `app.{method}({route}, function(req, res) {})` が基本形式
  - 関数は複数持つことが可能で、第 3 引数に next を指定し呼び出すことで次のメソッドを実行できる
    - [] 用途？
  - [request api reference](https://expressjs.com/ja/4x/api.html#res)

## sample

[Express の「Hello World」の例](https://expressjs.com/ja/starter/hello-world.html)

```bash
npm install -D express
```

_app.js_

```js
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

```bash
node app.js
```

[http://localhost:3000/](http://localhost:3000/)
