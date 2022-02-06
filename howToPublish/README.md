# how to publish

npm への publish の仕方

- トランスパイル込の package を publish する場合の考察
  - package.json の main と test の実行先をトランスパイル後のファイルにする
  - 課題に思った点
    - トランスパイル結果を git に含めるか？
    - ユニットテストなどを書く場合は先に test からとよく言うがそれができないなと思ったため

## 配布者の設定をする

具体的には npm の config の設定をする

### 1. npm の config を確認/更新

`npm init -y` などでプロジェクトを生成したときに自動セットされる値の確認と更新を行う

1. 確認: `npm config list`
   - init.author.xxx が対象の値
2. init.author.name, init.author.email がセットされていなければ以下で追加
3. name と email の追加(消したい場合は "" をセット)
   - `npm set init.author.name "sample author"`
   - `npm set init.author.email "sample@mail.address"`

### 2. 各種ファイルの用意

- LICENSE.txt: package のライセンス情報
- .npmignore: publish の対象外にするファイル設定

#### LICENSE.txt

- MIT ライセンス: [The MIT License \| Open Source Initiative](https://opensource.org/licenses/MIT)
  - <YEAR>, <COPYRIGHT HOLDER> の部分を更新して利用

package.json の "license" も確認

#### .npmignore

publish の対象外にするファイル設定

以下はサンプル

```npmignore
# src directory
src/
docs/

# config files
rollup.config*
tsconfig*

# test
test/
```

## publish(アップロード)

npm へのログインをしていない場合はこちら

1. [npm](https://www.npmjs.com/)(アップロード先)で登録し、pc にユーザを登録する必要がある
2. `npm adduser` (name, password, mail などが聞かれる)

publish アップロード

1. test が正常に動作するか確認
2. package.json の version, private を確認
3. `npm publish`
