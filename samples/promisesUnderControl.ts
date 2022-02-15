// Multiple promises with the specified number of concurrent executions
//
// const max = 10 // Maximum number of concurrent executions
// const puc = new PromisesUnderControl(10)
// puc.add(() => rourPromise)
//
export class PromisesUnderControl<T> {
  funcs: (() => Promise<T>)[] = []
  runFuncs: (() => Promise<T>)[] = []
  max: number

  constructor(max = 10) {
    this.max = max
  }

  add(func: () => Promise<T>): boolean {
    if (this.funcs.includes(func) || this.runFuncs.includes(func)) {
      return false
    } else {
      this.funcs.push(func)
      this.run(func)
      return true
    }
  }

  private run(func: () => Promise<T>): void {
    if (this.runFuncs.length >= this.max) {
      return
    }

    // operation function management
    const id = this.funcs.indexOf(func)
    if (id === -1) {
      return
    }
    this.funcs.splice(id, 1)
    this.runFuncs.push(func)

    // run
    setTimeout(() => {
      func().finally(() => {
        const id = this.runFuncs.indexOf(func)
        if (id !== -1) {
          this.runFuncs.splice(id, 1)
        }
        if (this.funcs.length > 0) {
          this.run(this.funcs[0])
        }
      })
    }, 0)
  }
}
