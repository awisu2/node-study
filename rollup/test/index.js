var assert = require('assert')
var { hello } = require('../dist/nodeBundle')

describe('index.js', function () {
  it('hello"', function () {
    assert.equal(hello(), 'hello world')
  })
})
