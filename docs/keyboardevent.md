# keyboard event

## keydown, keyup

- [Document: keydown イベント \- Web API \| MDN](https://developer.mozilla.org/ja/docs/Web/API/Document/keydown_event)
- [KeyboardEvent\.code](https://developer.mozilla.org/ja/docs/Web/API/KeyboardEvent/code)
- [KeyboardEvent\.key](https://developer.mozilla.org/ja/docs/Web/API/KeyboardEvent/key)

### sample code

- <details>
  <summary>ev.key: like output (redomend)</summary>

  - 1 > "1"
  - a > "a"
  - shift + 1 > "!"
  - shift > "Shift"
  - arrow Up > "ArrowUp"

  </details>

- <details>
  <summary>ev.code: just latest key</summary>

  - 1 > "Digit1"
  - a > "KeyA"
  - shift + 1 > "ShiftLeft", "Digit1"
  - shift > "ShiftLeft" or "ShiftRight"
  - arrow Up > "ArrowUp"

  </details>

```ts
function keydown(ev: KeyboardEvent) {
  console.log(ev.key, ev.code)
  if (ev.key == 'ArrowLeft') {
    console.log('left!')
  } else if (ev.key == 'ArrowRight') {
    console.log('right!')
  }
}

// add event
document.addEventListener('keydown', keydown)

return () => {
  // remove event
  document.removeEventListener('keydown', keydown)
}
```
