# rough code

```ts
const a = 1

type opt = {
  add: string
}

for (let i = 0; i < 3; i++) {
  console.log(i) // 0, 1, 2
}

function func(name: string, opt?: opt) {
  if (!opt) {
    opt = {
      add: 'hello'
    }
  }
  console.log(`${opt.add} ${name} !`) // hello jon !
}

const arr = (): void => {
  {
    const arr = [0, 1, 2]
    const arr2: number[] = Array.from(Array(3).keys())
    // if not strict can write. `[...Array(3).keys()]`
    console.log(arr, arr2) // [0, 1, 2], [0, 1, 2]
  }

  {
    const arr: number[] = [1, 5, 9]
    const include1 = arr.includes(5) // true
    const include2 = arr.includes(999) // false
    console.log(include1, include2)
  }

  {
    const arr: number[] = [5]
    arr.unshift(1)
    arr.push(9)
    console.log(arr) // 1, 5, 9

    arr.pop()
    arr.shift()
    console.log(arr) // 1, 5, 9
  }

  {
    const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const ret = arr.splice(3, 2)
    console.log(arr, ret) // [1, 2, 3, 6, 7, 8, 9], [4, 5]
  }

  {
    let v1 = { i: 1 }
    let v2 = { i: 5 }
    let v3 = { i: 9 }
    const arr2: { i: number }[] = [v1, v2, v3]

    let idx = arr2.indexOf(v2)
    let idx2 = arr2.indexOf({ i: 5 })
    console.log(idx, idx2) // 1, -1
  }

  for (const v of [0, 1, 2]) {
    console.log(v) // 0, 1, 2
  }
}

func('jon')
arr()
```
