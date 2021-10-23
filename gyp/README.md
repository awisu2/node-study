# node-gyp

## 目的

- [] ちょいちょいでてくるnode-gypとは何なのか、及びその使い方の勉強
- [] goで生成したdllを再コンパイルし、electronで利用

## 動機(目的をぶらさないために)

普通に node で goから生成した .so/.dll ファイルを利用したい場合はこちらが参考になる

- [Calling Go Functions from Other Languages | by Vladimir Vivien | Learning the Go Programming Language | Medium](https://medium.com/learning-the-go-programming-language/calling-go-functions-from-other-languages-4c7d8bcc69bf)

- 自前コード: [go-study/sharedGo at main · awisu2/go-study](https://github.com/awisu2/go-study/tree/main/sharedGo)

しかしelectronの場合、専用のバージョンにする必要があるとのことで、electron-rebuildを勧められる。が、やっても動かないし、これが何をやっているかわからない。バージョンが違うとか言われるけれど、electron-forgeは自動でやってくれるとか言ってますが？という状態。

これを解決したい。ついでに、node-gyp盲を脱出したい


## node addonの歴史

いくつかの種類を踏襲している

v8 > NAN > NODE-API(N-API)

note: N-APIは命名変更されNODE-APIになった、NAPIと発音され蔑称と取られる事があるための

### links

- [N-APIが「Node-API」へ名称変更、既存のコンパイル済みアドオンへの影響はナシ：CodeZine（コードジン）](https://codezine.jp/article/detail/14109)
- 参考: v8 から NODE-APIへの書き換え [NAN to Node-API Migration: A Short Story - NodeSource](https://nodesource.com/blog/NAN-to-Node-API-migration-a-short-story)node

## node-gypとは？

[nodejs/node-gyp: Node.js native addon build tool](https://github.com/nodejs/node-gyp)

- クロスプラットフォームでnative addon moduleをnode.js向けにコンパイルする
- Node.js自体をコンパイルするのには使われていない
- 複数のNode.js バージョンをサポートしている

### 使い方(windows)

- Visual Studio Build Tools をインストール
  - [Visual Studio](https://visualstudio.microsoft.com/ja/thank-you-downloading-visual-studio/?sku=BuildTools)
- 起動した画面で、変更 > ワークロード > c++ によるデスクトップ開発をインストール

```bash
npm install -g node-gyp

# ドキュメントだと2017になっていたが、インストールしたのは2019だったので変更
npm config set msvs_version 2019

mkdir myProject && myProject

# TODO: binding.gyp not found エラーが発生するが別途作成(src/binding.gyp 参照)
npm config set python python2.7
node-gyp configure

# ビルド
node-gyp build
```

## [] Node-API

- doc: [Node-API | Node.js v17.0.1 Documentation](https://nodejs.org/api/n-api.html#node-api)


## 用語

- abi: Application Binary Interface (アセンブラなど、いわゆる低級言語規定、メモリ管理やosとの連携など)
- api: Application Programming Interface (nodeなど、いわゆる高級言語規定、abiを利用する)
  - posix api: 主にUNIX系のOS間で利用されるC言語関数のAPIセット

### links

- [APIとかABIとかシステムコールとか - 覚書](https://satoru-takeuchi.hatenablog.com/entry/2020/03/26/011858)

