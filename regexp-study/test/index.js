var assert = require('assert')

describe('index.js', function () {
  it('riteral and constractor"', function () {
    const re1 = /ab+c/i // リテラル式
    const re2 = new RegExp('ab+c', 'i') // コンストラクター式
    const re3 = new RegExp(/ab+c/, 'i') // コンストラクター式(リテラル引き渡し)

    assert.equal(re1.source, 'ab+c')
    assert.equal(re1.flags, 'i')

    assert.equal(re1.toString(), re2.toString())
    assert.equal(re2.toString(), re3.toString())
  })

  it('flag g', function () {
    const re = /ABC/
    const re2 = /ABC/g

    const s = 'xxABCxxABCxx'
    assert.equal(s.replace(re, '='), 'xx=xxABCxx')
    assert.equal(s.replace(re2, '='), 'xx=xx=xx')
  })

  it('exec', function () {
    const re = /ABC/gi
    const re2 = /(ABC)/dgi

    // not match
    assert.equal(re.exec('xxxxx'), null)

    // match
    const s = '==AbC==aBc=='
    const ret = re.exec(s)
    const ret2 = re2.exec(s)
    assert.ok(ret[0])

    // ()がない場合、２つめ以降はundefined
    assert.equal(ret[1], undefined)
    assert.equal(ret2[1], 'AbC')
    assert.equal(ret2[2], undefined)

    assert.equal(ret.index, 2)
    assert.equal(ret.input, s)
    assert.equal(ret.groups, null)
  })

  it('match', function () {
    const re = /ABC/gi
    const re2 = /(ABC)/dgi

    // not match
    assert.equal('xxxxx'.match(re), null)

    // match
    const s = '==AbC==aBc=='
    const ret = s.match(re)
    const ret2 = s.match(re2)
    assert.equal(ret.length, 2)
    assert.equal(ret[0], 'AbC')
    assert.equal(ret[1], 'aBc')

    assert.equal(ret.length, ret2.length)
    assert.equal(ret[0], ret2[0])
    assert.equal(ret[1], ret2[1])
  })

  it('matchAll', function () {
    const re = /AB+C/gi
    const re2 = /(AB+C)/dgi

    // not match
    {
      const matches = 'xxxxx'.matchAll(re)
      const isMatch = false
      for (const match of matches) {
        isMatch = true
      }
      assert.equal(isMatch, false)
    }

    // match
    const s = '==AbbbbbC==aBc=='
    {
      const ret = s.matchAll(re)
      for (const match of ret) {
        assert.equal(match.length, 1)
        assert.ok(match.index)
        assert.equal(match.input, s)
        assert.equal(match.groups, undefined)
        // assert.equal(!match.indices) // () がない場合はプロパティなし
      }
    }

    {
      const ret = s.matchAll(re2)
      for (const match of ret) {
        assert.equal(match.length, 2)
        assert.ok(match.index)
        assert.equal(match.input, s)
        assert.equal(match.groups, undefined)
        assert.ok(match.indices) // () に一致する情報 dフラグがあるときのみ
      }
    }
  })
})
