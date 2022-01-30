var assert = require('assert')
var { spawnLs } = require('../index')

describe('index.js', function () {
  it('spawn ls or dir', function () {
    assert.ok(spawnLs() != '')
  })
})
