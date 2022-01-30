var assert = require('assert')
var { hello } = require('../index')

describe('index.js', function () {
  it('hello return "hello world!"', function () {
    assert.equal(hello(), 'hello world!')
  })
})
