var assert = require('assert')

describe('index.js', function () {
  it('array sort', function () {
    const arr1 = [2, 3, 1]
    // sort with create new array
    const arr2 = [...arr1].sort()
    const arr3 = [...arr1].sort((a, b) => {
      return a > b ? -1 : 1
    })

    assert.equal(arr1[0], 2)
    assert.equal(arr1[1], 3)
    assert.equal(arr1[2], 1)

    assert.equal(arr2[0], 1)
    assert.equal(arr2[1], 2)
    assert.equal(arr2[2], 3)

    assert.equal(arr3[0], 3)
    assert.equal(arr3[1], 2)
    assert.equal(arr3[2], 1)
  })
})
