# childprocess の勉强

- ドキュメント: [Child process \| Node\.js v17\.4\.0 Documentation](https://nodejs.org/api/child_process.html)

特定のプロセスを開始(コマンドを実行)する。(popen に似た挙動)

- 基本的には、`spawn()`, `exec()` を利用しておけば安定
  - windows かつ `execFile()` でファイルを起動する場合は注意
- `exec()`, `execFile()` は callback 関数を付与できる
- windows の場合, `windowsHide` オプションでコンソールの表示を防止できる
- 細かい挙動は (後述)
- argument `callback` of exec and spawn
  - type: `(error: ExecException, stdout: string, stderr: string)`
  - stdout, stderr are return all value when command finised.
  - error: if command failed and self call `childprocess.kill()`.
    - if call `kill` error return `error.killed: true`
- need `stdout` async
  - [Child process \| Node\.js v17\.5\.0 Documentation](https://nodejs.org/api/child_process.html#subprocessstdout)
  - `subprocess.stdout.on('data', (data) => {})`
  - it seems to be returned when the process is free, it is not a very definitive return.

## sample code

```js
const { exec } = require('child_process')

function runCommand(cmd) {
  // execute
  const cp = exec(cmd, (err, stdout, stderr) => {
    console.log(err)
    console.log(`stdout: ${stdout}, stderr: ${stderr}`)
  })

  // get stdout async
  cp.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`)
  })

  // process exsitting. before run callback
  cp.on('exit', (code) => {
    console.log(`exit. exitcode: ${code}`)
  })

  // call finaly.
  cp.on('close', (data) => {
    console.log(`close process. exitcode: ${data}`)
  })

  return cp
}

const cp = runCommand('ls')
// kill if need
cp.kill()
```

## 主要コマンド

- `child_process.spawn()`: 非同期で子プロセスを起動させる
  - `child_process.spawnSync()`: 同期版
- `child_process.exec()`: shell を起動し、非同期でコマンドを実行する
  - `child_process.execSync()`: 同期版
- `child_process.execFile():` exec()に似ているが、shell を起動せずコマンドを直接実行
  - `child_process.execFileSync()`: 同期版
- `child_process.fork()`: 新しい node.js process を起動し module を実行(IPC communication channnel により親子プロセス間での疎通可能)

Note: ここで起動や発生と書いているのは spawn の翻訳として

## spawn

[child_process.spawn(command[, args][, options])](https://nodejs.org/api/child_process.html#child_processspawncommand-args-options)

- can set arguments by array
- not has callback

## exec

[child_process.exec(command[, options][, callback])](https://nodejs.org/api/child_process.html#child_processexeccommand-options-callback)

- can't set arguments by array
- has callback

### can be promised

note: copy from official site code

```js
const util = require('util')
const exec = util.promisify(require('child_process').exec)

async function lsExample() {
  const { stdout, stderr } = await exec('ls')
  console.log('stdout:', stdout)
  console.error('stderr:', stderr)
}
lsExample()
```

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
