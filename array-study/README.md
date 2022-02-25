# array-study

- maybe easy way: [lodash/array](https://github.com/awisu2/node-study/blob/main/lodash-study/docs/methods.md#array)
- official: [Array \- JavaScript \| MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array)

## sample

```js
var assert = require('assert')

describe('index.js', function () {
  it('define', function () {
    const arr1 = [1, 2, 3]
    assert.deepEqual(arr1, [1, 2, 3])

    assert.deepEqual(Array(3), [, , ,])
    assert.deepEqual([...Array(3).keys()], [0, 1, 2])
  })

  it('clone', function () {
    const arr1 = [1, 2, 3]

    const _arr1 = arr1
    assert.equal(arr1, _arr1)

    assert.deepEqual([...arr1], [1, 2, 3])
    assert.notEqual([...arr1], arr1)

    assert.deepEqual(arr1.slice(), [1, 2, 3])
    assert.notEqual(arr1.slice(), arr1)

    assert.deepEqual([].concat(arr1), [1, 2, 3])
    assert.notEqual([].concat(arr1), arr1)
  })

  it('include indexOf find findIndex', function () {
    const f = () => {}
    const arr = [1, 2, 3, f]

    assert.ok(arr.includes(f))

    assert.equal(arr.indexOf(f), 3)
    assert.equal(arr.indexOf(9), -1)

    assert.equal(
      arr.find((v) => v == f),
      f
    )
    assert.equal(
      arr.findIndex((v) => v == f),
      3
    )
  })

  it('filter map fill', function () {
    const arr = [1, 2, 3]

    // filter
    assert.deepEqual(
      arr.filter((v) => v > 1),
      [2, 3]
    )

    // map
    assert.deepEqual(
      arr.map((v) => v + 1),
      [2, 3, 4]
    )

    // fill
    assert.deepEqual([...arr].fill(9), [9, 9, 9])
    assert.deepEqual([...arr].fill(9, 1, 2), [1, 9, 3])
  })

  it('array sort', function () {
    const arr1 = [2, 3, 1]

    const arr2 = [...arr1].sort()
    assert.deepEqual(arr2, [1, 2, 3])

    const arr3 = [...arr1].sort((a, b) => {
      return a > b ? -1 : 1
    })
    assert.deepEqual(arr3, [3, 2, 1])

    assert.deepEqual([...arr1].reverse(), [1, 3, 2])
  })

  it('unshift push shift pop', function () {
    const arr = [5]

    arr.unshift(1)
    arr.push(9)
    assert.deepEqual(arr, [1, 5, 9])

    arr.shift()
    assert.deepEqual(arr, [5, 9])

    arr.pop()
    assert.deepEqual(arr, [5])
  })

  it('splice', function () {
    let arr = [1, 2, 3, 4, 5]

    let ret = arr.splice(1, 3) // i = 1 ~ 1+3
    assert.deepEqual(arr, [1, 5])
    assert.deepEqual(ret, [2, 3, 4])
  })

  it('slice', function () {
    let arr = [1, 2, 3, 4, 5]

    let ret = arr.slice(2, 4) // 2 <= i < 4
    assert.deepEqual(arr, [1, 2, 3, 4, 5])
    assert.deepEqual(ret, [3, 4])
  })
})
```
