var assert = require('assert')
var { getPath, isProduction } = require('../index')

describe('index', function () {
  describe('getPath()', function () {
    const path = getPath()

    it('any value can get', function () {
      assert.ok(path)
    })
  })

  describe('isProduction', function () {
    const _isProduction = isProduction()

    it('not production on test', function () {
      assert.equal(_isProduction, false)
    })
  })
})
