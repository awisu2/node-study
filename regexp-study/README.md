# regexp

正規表現

- [RegExp \- JavaScript \| MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- 正規表現の仕様: [正規表現 \- JavaScript \| MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Regular_Expressions)

## サンプル

- `/ab+c/i` において`ab+c`の部分を source, `i`の部分を flag という

```js
const re1 = /ab+c/i // リテラル式
const re2 = new RegExp('ab+c', 'i') // コンストラクター式
const re3 = new RegExp(/ab+c/, 'i') // コンストラクター式(リテラル引き渡し)

assert.equal(re1.source, 'ab+c')
assert.equal(re1.flags, 'i')

assert.equal(re1.source, re2.source)
assert.equal(re2.source, re3.source)
```

## falag

[flag](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Regular_Expressions#advanced_searching_with_flags)

- d: 一致した文字列の位置を生成
- g: グローバル検索(一致対象が複数ある場合全てに処理を行う)
- i: 大/小文字を区別しない
- m: 複数行検索を行う
- s: .と改行を一致
- u: unicode としてあつかう
- y: lastIndex の箇所から検索する先頭固定(sticky)検索

## properties

- re.source: パターンのテキスト
- re.flags: フラグのテキスト(i,g など)
- re.ignoreCase: 大/小文字無視フラグ
- re.multiline: 複数行検索フラグ
- re.unicode: unicode が有効であるかフラグ
- re.sticky: lastIndex の箇所から検索する先頭固定(sticky)検索であるか

## methods

- exec と test と search: それぞれ最初に一致したものにより返却 test は boolean, search は index
- exec, match, matchAll: 一致した結果の詳細を返却
  - exec は先頭 1 つ固定, match はフラグによる, matchAll は g フラグ強制
- `(?<{key}>abc)`: 特殊正規表現, exec や matchAll などで groups が返却されるようになる
  - groups: `{key: match文字列}` のオブジェクト
  - [グループと範囲 \- JavaScript \| MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges)
- dフラグ: exec や matchAllなどでindicesが返却されるようになる

各種説明

- `re.exec()`: 一致するものを検索(g フラグを付けても先頭１つ)
  - `RegExp.exec(string: string): RegExpExecArray`
  - 返り値: RegExpExecArray
    - index = 0 に一致した文字列, 1~には pattern の`()`に一致する文字がセットされる
    - プロパティに, index, input, groups
- `re.test(str)`: str が re に一致するかを調べる
- `re.toString()`: pattern と flag をリテラル式の文字列で返却
- `str.match(re)`: 一致するすべての文字列を配列で返却(g を付けなくても全て)
  - `RegExp.exec(string: string): RegExpExecArray`
  - 返り値: RegExpExecArray
    - g フラグが立っている場合
      - 一致しない場合は null
      - 一致する場合は対象文字の string[]
    - g フラグなしの場合: exec と同等
  - [サブクラスでのオーバーライド](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@match#using_match_in_subclasses)が可能
- `str.matchAll(re)`: 一致した結果をイテレータオブジェクトで返却
  - 正規表現が g フラグなしだとエラーになる
  - `String.matchAll(regexp: RegExp): IterableIterator<RegExpMatchArray>`
  - 返り値: IterableIterator<RegExpMatchArray>
    - 一致しない場合でもオブジェクトは返却される
    - 一致する場合
      - index = 0 に一致した文字列, 1~には pattern の`()`に一致する文字がセットされる
      - プロパティに, index, input, groups, indices
        - indices (d フラグを付与したときのみ)
- `str.replace(re, replaceValue)`: 一致する文字列の置換
- `str.search(re)`: 最初に一致した箇所の index を返却
- `str.split(re)`: 分割して返却

note

- 各メソッドは、RegExp オブジェクトのサブクラスを生成してカスタムが可能、ただし、**関数を置き換えるという仕様** のため、無理してカスタムクラス作らなくて良い気がする
