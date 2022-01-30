const os = require('os')

// osのプラットフォーム情報をobjectで返却
function platformInfo() {
  const platform = os.platform

  return {
    platform: platform,
    isWindows: platform == 'win32',
    isMac: platform == 'darwin',
    isLinux: platform == 'linux',
    isAix: platform == 'aix',
    isDarwin: platform == 'darwin',
    isFreeBsd: platform == 'freebsd',
    isOpenBsd: platform == 'openbsd',
    isSuns: platform == 'sunos',
    isAndroid: platform == 'android' // may be
  }
}

module.exports = {
  platformInfo
}
