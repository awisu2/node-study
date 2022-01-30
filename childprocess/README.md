# childprocess の勉强

- ドキュメント: [Child process \| Node\.js v17\.4\.0 Documentation](https://nodejs.org/api/child_process.html)

特定のプロセスを開始(コマンドを実行)する。(popen に似た挙動)

- 基本的には、`spawn()`, `exec()` を利用しておけば安定
  - windows かつ `execFile()` でファイルを起動する場合は注意
- `exec()`, `execFile()` は callback 関数を付与できる
- windows の場合, `windowsHide` オプションでコンソールの表示を防止できる
- 細かい挙動は (後述)

## 主要コマンド

- `child_process.spawn()`: 非同期で子プロセスを起動させる
  - `child_process.spawnSync()`: 同期版
- `child_process.exec()`: shell を起動し、コマンドを実行する
  - `child_process.execSync()`: 同期版
- `child_process.execFile():` exec()に似ているが、shell を起動せずコマンドを直接実行
  - `child_process.execFileSync()`: 同期版
- `child_process.fork()`: 新しい node.js process を起動し module を実行(IPC communication channnel により親子プロセス間での疎通可能)

Note: ここで起動や発生と書いているのは spawn の翻訳として

## spawn

- [child_process.spawn(command[, args][, options])](https://nodejs.org/api/child_process.html#child_processspawncommand-args-options)

## exec

- [child_process.exec(command[, options][, callback])](https://nodejs.org/api/child_process.html#child_processexeccommand-options-callback)

## 細かい挙動

- 起動プロセスの制限超えした出力は、_{ stdio: 'ignore' }_ のように扱われる
- コマンドの確認は `options.env.PATH`または `process.env.PATH` によって行われる
- windows で発生する可能性のある問題
  - 環境変数の大文字小文字を区別しないため。同名の環境変数値が上書きされる
  - .bat, .cmd を spawn するときの注意
    - [Spawning .bat and .cmd files on Windows \| Node\.js v17\.4\.0 Documentation](https://nodejs.org/api/child_process.html#spawning-bat-and-cmd-files-on-windows)
    - `execFile()` では起動できない
      - .bat, .cmd は terminal なしに起動することができないため
    - `exec()` or `spawn()` で.bat, .cmd 起動すること(`spawn()` は shell オプションを付与)
      - `cmd.exe` を呼び出してファイルを渡すという方法でも OK
