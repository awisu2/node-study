var assert = require('assert')
var { exec, promiseExec, promisfyChildProcess } = require('../dist/index')

describe('ts test', function () {
  it('exec with childpromise', async function () {
    let stdout = ''
    let stderr = ''
    const cp = exec(['ls'], null, (_, _stdout, _stderr) => {
      stdout += _stdout
      stderr += _stderr
    })
    await promisfyChildProcess(cp)

    assert.ok(stdout)
    assert.equal(stderr, '')
  })

  describe('promiseExec', async function () {
    const { stdout, stderr } = await promiseExec('ls')
    assert.ok(stdout)
    assert.equal(stderr, '')
  })
})
