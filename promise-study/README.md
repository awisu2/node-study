# promise study

**NOTE**

- promise is run soon at create. ex: `new Promise(() => {{any}})`
  - if want just create without run. inclucde promise in function
    - ex: `() => { return new Promise(() => {{any}})}`
- `util.promisify` can change promise a function that has callback function as an argument with error and value
  - can change node's library. ex: `util.promisify(fs.stat)`, `util.promisify(childprocess.exec)`
- promise's `.then(value => {})` can chain
- Promise's functions
  - [Promise\.all\(\)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/all): run multi promise

**MORE**

- If you use promise for a function that hasa a meaningful return value, you need to consider it.
  - ex: exec of childProcess has process information in the return value in addition to the callback, and uses it to get pid or kill.
  - type of exec(): `function exec(command: string, callback?: (error: ExecException | null, stdout: string, stderr: string) => void): ChildProcess`
- is a `promise` an alternative to `setTimeout(() => {}, 0)` ?
  - may be yes promise run before setTimeout 0.
    - if you need a lot of background tasks and smooth operation at the same time, setTimeout may be better. (ex: electron, react-native)
  - [Tasks, microtasks, queues and schedules \- JakeArchibald\.com](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)

## codes

### normaly usage

```ts
function helloPromise(isError = false): Promise<string> {
  return new Promise<string>((resolve, rejects) => {
    if (isError) {
      rejects("i wan't say hello")
      return
    }

    resolve('hello world!')
  })
}

// just run
helloPromise()

// get return value
helloPromise()
  .then((str) => {
    console.log(str) // hello world !
  })
  .catch((err) => {
    console.log(err)
  })
  .finally(() => {
    console.log('finaly helloPromise')
  })

// can chain
helloPromise()
  .then(() => {
    return helloPromise()
  })
  .then((str) => {
    return str
  })
  .then((str) => {
    console.log(`promise return promise ${str}`)
  })
```

### promisify

```ts
import { promisify } from 'util'

function helloCallback(callback: (err: Error, str: string) => void): string {
  setTimeout(() => {
    callback(null, 'hello world (callback)')
  }, 0)
  return 'hi !'
}
const helloPromisfy = promisify(helloCallback)
```
