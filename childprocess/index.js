const { spawnSync, spawn } = require('child_process')
const { pink } = require('color-name')
const { platformInfo } = require('./os')

const decoderUtf8 = new TextDecoder('utf-8')
const pInfo = platformInfo()

function spawnLs() {
  let command = 'ls'
  if (pInfo.isWindows) {
    command = 'dir'
  }
  const res = spawnSync(command)

  return decoderUtf8.decode(res.stdout)
}

// プロセスリストの取得
function taskList(opt = {}) {
  if (pInfo.isWindows) {
    return windowsTasklist(opt)
  } else {
    return
  }
}

// tasklist/process list の取得(windows用)
// filterは meta(*) の利用が可能 (例: *xyz*)
function windowsTasklist(opt = {}) {
  if (typeof opt != 'object') opt = {}

  // csv形式で取得
  let args = ['/FO', 'csv']
  // フィルタ
  if (opt.filter) {
    args = args.concat('/FI', `imagename eq ${opt.filter}`)
  }

  // tasklist取得
  // windowsHideオプションで、コンソールウィンドの表示を防止
  const res = spawnSync('tasklist', args, { windowsHide: true })

  // 解析して配列化
  const tasks = []
  const lines = decoderUtf8.decode(res.stdout).split('\r\n')
  lines.splice(0, 1) // 先頭行はヘッダなので削除
  for (const line of lines) {
    const items = line.substring(1, line.length - 2).split('","')
    if (items.length != 5) continue

    tasks.push({
      name: items[0], // イメージ名
      pid: items[1],
      session: items[2],
      'session#': items[3],
      memory: items[4]
    })
  }

  return tasks
}

module.exports = {
  spawnLs,
  taskList
}
