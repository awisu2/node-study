const res = [/ab+c/i, /(ab+c)/dgi, /(?<abc>abc)/gim]

const s = 'xxABCxxAbCxx'

function logtitle(title) {
  console.log(`----- ${title} -----`)
}

logtitle('replace')
for (const re of res) {
  console.log(s.replace(re, '='))
  // 'xx=xxABCxx'
  // 'xx=xx=xx'
  // 'xx=xx=xx'
}

logtitle('exec')

console.log(res[0].exec('xxxxxxxxxx')) // null
for (const re of res) {
  console.log(re.exec(s))
  // [ 'ABC', index: 2, input: 'xxABCxxABCxx', groups: undefined ]
  // [
  //   'ABC',
  //   'ABC',
  //   index: 2,
  //   input: 'xxABCxxABCxx',
  //   groups: undefined,
  //   indices: [ [ 2, 5 ], [ 2, 5 ], groups: undefined ]
  // ]
  // [ 'ABC', index: 2, input: 'xxABCxxABCxx', groups: undefined ]
}

logtitle('match')
console.log('xxxxxxxxx'.match(res[0])) // null
for (const re of res) {
  console.log(s.match(re))
  // [ 'ABC', index: 2, input: 'xxABCxxABCxx', groups: undefined ]
  // [ 'ABC', 'ABC' ]
  // [ 'ABC', 'ABC' ]
}

logtitle('matchAll')
try {
  console.log('xxxxxxxxx'.matchAll(res[0])) // TypeError
} catch (err) {
  console.log(err) // TypeError: String.prototype.matchAll called with a non-global RegExp argument
}
for (const ret of s.matchAll(res[1])) {
  console.log(ret)
  // [
  //   'ABC',
  //   'ABC',
  //   index: 2,
  //   input: 'xxABCxxAbCxx',
  //   groups: undefined,
  //   indices: [ [ 2, 5 ], [ 2, 5 ], groups: undefined ]
  // ]

  // [
  //   'AbC',
  //   'AbC',
  //   index: 7,
  //   input: 'xxABCxxAbCxx',
  //   groups: undefined,
  //   indices: [ [ 7, 10 ], [ 7, 10 ], groups: undefined ]
  // ]
}
for (const ret of s.matchAll(res[2])) {
  console.log(ret)
  // [
  //   'ABC',
  //   'ABC',
  //   index: 2,
  //   input: 'xxABCxxAbCxx',
  //   groups: [Object: null prototype] { abc: 'ABC' }
  // ]

  // [
  //   'AbC',
  //   'AbC',
  //   index: 7,
  //   input: 'xxABCxxAbCxx',
  //   groups: [Object: null prototype] { abc: 'AbC' }
  // ]
}

logtitle('replace')
for (const re of res) {
  console.log(s.replace(re, 'YYY'))
  // xxYYYxxAbCxx
  // xxYYYxxYYYxx
  // xxYYYxxYYYxx
}

logtitle('search')
for (const re of res) {
  console.log(s.search(re))
  // 2
  // 2
  // 2
}

logtitle('toString')
for (const re of res) {
  console.log(re.toString())
  // /ab+c/i
  // /(ab+c)/dgi
  // /(?<abc>abc)/gim
}
