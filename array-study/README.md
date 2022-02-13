# array-study

- maybe easy way: [lodash/array](https://github.com/awisu2/node-study/blob/main/lodash-study/docs/methods.md#array)

## sort

- [Array\.prototype\.sort\(\) \- JavaScript \| MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

```js
const arr1 = [2, 3, 1]

// sort with create new array
const arr2 = [...arr1].sort()

// sort with compare function
const arr3 = [...arr1].sort((a, b) => {
  return a > b ? -1 : 1
})
```
