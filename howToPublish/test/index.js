var assert = require('assert')
var hello = require('../index')

describe('index.js', function () {
  it('run hello()', function () {
    assert.equal(hello(), 'hello world')
  })
})
