import { exec as _exec, ExecException, ChildProcess, ExecOptions } from 'child_process'
import { platform } from 'os'
import { promisify } from 'util'

const isWindows = platform() === 'win32'

export type execCallback<T = string> = (
  err: ExecException,
  stdout: T,
  stderr: string
) => void

function fixOption(opts?: ExecOptions): ExecOptions {
  if (!opts) {
    opts = {}
  }
  // hide commandprompt window at exec
  if (isWindows) opts.windowsHide = true
  return opts
}

export type appExecReturn = ReturnType<typeof exec>

// promisefied exec()
export const promiseExec = promisify(_exec)

// exec with custom
//
// firstly it's not a big deal, so if you don't need these options, just use child_process's exec()
// exec() can be promised, but it's not always good. becauce the exec() returns meaningful value. some pattern use this value.
//
// - can set command by array
// - auto set windowsHide if run on windows
//
export function exec(
  cmd: string[],
  opts: ExecOptions,
  callback?: execCallback
): ChildProcess {
  const cmdstr = cmd.join(' ')
  opts = fixOption(opts)

  return _exec(cmdstr, opts, (error, stdout, stderr) => {
    if (error) {
      console.error(error)
    }
    if (callback) {
      callback(error, stdout, stderr)
    }
  })
}

// Promisfy childProcess
//
// i have prepared this function to take advantge of await
//
export function promisfyChildProcess(cp: ChildProcess): Promise<void> {
  let isError = false
  return new Promise<void>((resolve, reject) => {
    cp.on('error', (err) => {
      isError = true
      reject(err)
    })

    cp.on('close', () => {
      if (!isError) {
        resolve()
      }
    })
  })
}
