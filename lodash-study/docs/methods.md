# method 一覧

var 4.17.15 `lodash modularize` より

- [core](./core.md): lodash/core を抜粋

## array

- chunk: 指定数で分割
- compact: false 判定される値を削除
- concat: 結合した配列を返却(`[].concat()`)
- difference: 2 つの配列間で、重複しない値を配列で返却
- differenceBy
- differenceWith
- drop
- dropRight
- dropRightWhile
- dropWhile
- fill
- findIndex
- findLastIndex
- first
- flatten
- flattenDeep
- flattenDepth
- fromPairs
- head
- indexOf
- initial
- intersection
- intersectionBy
- intersectionWith
- join
- last
- lastIndexOf
- nth
- pull
- pullAll
- pullAllBy
- pullAllWith
- pullAt
- remove
- reverse
- slice
- sortedIndex
- sortedIndexBy
- sortedIndexOf
- sortedLastIndex
- sortedLastIndexBy
- sortedLastIndexOf
- sortedUniq
- sortedUniqBy
- tail
- take
- takeRight
- takeRightWhile
- takeWhile
- union
- unionBy
- unionWith
- uniq
- uniqBy
- uniqWith
- unzip
- unzipWith
- without
- xor
- xorBy
- xorWith
- zip
- zipObject
- zipObjectDeep
- zipWith

## collection

- countBy
- each
- eachRight
- every: 配列内のすべてのオブジェクトが指定条件に一致するか判定
- filter
- find
- findLast
- flatMap
- flatMapDeep
- flatMapDepth
- forEach
- forEachRight
- groupBy
- includes
- invokeMap
- keyBy
- map
- orderBy
- partition
- reduce
- reduceRight
- reject
- sample
- sampleSize
- shuffle
- size
- some
- sortBy

## date

- now

## function

- after
- ary
- before
- bind
- bindKey
- curry
- curryRight
- debounce
- defer
- delay
- flip
- memoize
- negate
- once
- overArgs
- partial
- partialRight
- rearg
- rest
- spread
- throttle
- unary
- wrap

## lang

- castArray: 値を配列(の先頭要素)にして返却
- clone: ルーズコピー
  - [The structured clone algorithm \- Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)
- cloneDeep: clone を内部要素に対しても行う
- cloneDeepWith: cloneDeep + カスタム関数
- cloneWith: clone + カスタム関数
- conformsTo
- eq
- gt
- gte
- isArguments
- isArray
- isArrayBuffer
- isArrayLike
- isArrayLikeObject
- isBoolean
- isBuffer
- isDate
- isElement
- isEmpty
- isEqual
- isEqualWith
- isError
- isFinite
- isFunction
- isInteger
- isLength
- isMap
- isMatch
- isMatchWith
- isNaN
- isNative
- isNil
- isNull
- isNumber
- isObject
- isObjectLike
- isPlainObject
- isRegExp
- isSafeInteger
- isSet
- isString
- isSymbol
- isTypedArray
- isUndefined
- isWeakMap
- isWeakSet
- lt
- lte
- toArray
- toFinite
- toInteger
- toLength
- toNumber
- toPlainObject
- toSafeInteger
- toString

## object

- assign
- assignIn
- assignInWith
- assignWith
- at
- create
- defaults
- defaultsDeep
- entries
- entriesIn
- extend
- extendWith
- findKey
- findLastKey
- forIn
- forInRight
- forOwn
- forOwnRight
- functions
- functionsIn
- get
- has
- hasIn
- invert
- invertBy
- invoke
- keys
- keysIn
- mapKeys
- mapValues
- merge
- mergeWith
- omit
- omitBy
- pick
- pickBy
- result
- set
- setWith
- toPairs
- toPairsIn
- transform
- unset
- update
- updateWith
- values
- valuesIn

## number

- clamp
- inRange
- random

## seq

- at
- chain
- commit
- lodash
- next
- plant
- reverse
- tap
- thru
- toIterator
- toJSON
- value
- valueOf
- wrapperChain

## string

- camelCase
- capitalize
- deburr
- endsWith
- escape
- escapeRegExp
- kebabCase
- lowerCase
- lowerFirst
- pad
- padEnd
- padStart
- parseInt
- repeat
- replace
- snakeCase
- split
- startCase
- startsWith
- template
- templateSettings
- toLower
- toUpper
- trim
- trimEnd
- trimStart
- truncate
- unescape
- upperCase
- upperFirst
- words

## util

- attempt
- bindAll
- cond
- conforms
- constant
- defaultTo
- flow
- flowRight
- identity
- iteratee
- matches
- matchesProperty
- method
- methodOf
- mixin
- noop
- nthArg
- over
- overEvery
- overSome
- property
- propertyOf
- range
- rangeRight
- stubArray
- stubFalse
- stubObject
- stubString
- stubTrue
- times
- toPath
- uniqueId
