const child_process = require('child_process')
const { platformInfo } = require('./os')

const decoderUtf8 = new TextDecoder('utf-8')

function spawnLs() {
  let command = 'ls'
  if (platformInfo().isWindows) {
    command = 'dir'
  }
  const res = child_process.spawnSync(command)

  return decoderUtf8.decode(res.stdout)
}

module.exports = {
  spawnLs
}
