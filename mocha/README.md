# mocha の勉强

- [mochajs/mocha: ☕️ simple, flexible, fun javascript test framework for node\.js & the browser](https://github.com/mochajs/mocha)
- [Mocha \- the fun, simple, flexible JavaScript test framework](https://mochajs.org/)

node の unittestt package の一つ

- test ディレクトリ配下に作成

## getting start

[Mocha \- the fun, simple, flexible JavaScript test framework](https://mochajs.org/#getting-started)

```bash
npm install mocha
```

_test/test.js_

```js
var assert = require('assert')

// describe: テスト概要。出力にグループ分けするテキストとindentを付けてくれる(実際のテストはしない)
describe('Array', function () {
  describe('#indexOf()', function () {
    // it: テスト。第一引数はテスト詳細
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1)

      // INFO: わざと間違えてみる
      assert.equal([1, 2, 3].indexOf(4), 1)
    })
  })
})
```

```bash
npx mocha
```
