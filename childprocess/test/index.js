var assert = require('assert')
var { spawnLs, taskList } = require('../index')

describe('index.js', function () {
  it('spawn ls or dir', function () {
    assert.ok(spawnLs() != '')
  })

  describe('tasklist', function () {
    this.timeout(5000)

    it('return any value', function () {
      assert.ok(taskList() != '')
    })
  })
})
