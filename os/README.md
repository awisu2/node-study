# os

[OS \| Node\.js v17\.4\.0 Documentation](https://nodejs.org/api/os.html)

- `os.platform`: 動作している環境を文字列で返却

## code

```js
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
```
