# how to publish

npm への publish の仕方

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

### 2. LICEMSE.txt の用意

- MIT ライセンス: [The MIT License \| Open Source Initiative](https://opensource.org/licenses/MIT)
  - <YEAR>, <COPYRIGHT HOLDER> の部分を更新して利用

package.json の "license" も確認

## publish(アップロード)

npm へのログインをしていない場合はこちら

1. [npm](https://www.npmjs.com/)(アップロード先)で登録し、pc にユーザを登録する必要がある
2. `npm adduser` (name, password, mail などが聞かれる)

publish アップロード

1. test が正常に動作するか確認
2. package.json の version, private を確認
3. `npm publish`
