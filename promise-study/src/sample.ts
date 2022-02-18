import { promisify } from 'util'

function helloPromise(isError = false): Promise<string> {
  return new Promise<string>((resolve, rejects) => {
    if (isError) {
      rejects("i wan't say hello")
      return
    }

    resolve('hello world!')
  })
}

function helloCallback(callback: (err: Error, str: string) => void): string {
  setTimeout(() => {
    callback(null, 'hello world (callback)')
  }, 0)
  return 'hi !'
}
const helloPromisfy = promisify(helloCallback)

function main() {
  {
    let ret = helloCallback((err, str) => {
      // null and not run
      if (err) {
        console.error(err)
        return
      }
      console.log(str) // hello world (callback)
    })
    console.log(ret) // hi !
  }

  {
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
  }

  {
    helloPromisfy()
      .then((str) => {
        console.log(str) // hello world (cllback)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        console.log('finaly (hello promisfy)')
      })
  }

  {
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
  }
}
main()
