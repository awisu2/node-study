var assert = require('assert')

// describe: テスト概要。出力にグループ分けするテキストとindentを付けてくれる(実際のテストはしない)
describe('Array', function () {
  describe('#indexOf()', function () {
    // 特定のテストのtimeout時間を変更
    this.timeout(5000)

    // it: テスト。第一引数はテスト詳細
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1)
    })
  })
})
