# mouseevent-study

javascript mouseevent study

- [GlobalEventHandlers \- Web API \| MDN](https://developer.mozilla.org/ja/docs/Web/API/GlobalEventHandlers)

NOTE

- events
  - onmousemove
  - onmouseover
  - onmouseout
  - onmousedown
  - onmouseup
- events just run each case. it's mean need set status we need.(ex: now pushing or not)
- return parameters
  - ev.clientX, ev.clientY: absolute position on display
  - ev.offsetX, ev.offsetY: offset position
- clickevent: codes write later
  - onclick: left click
  - onauxclick: without left click

## about offsetX/Y

The offset property has special behavior.

1. return position from current element's left, top corner.
2. change curernt element if set style `position: relative/absolute;`.
3. always just return current element position.
   - it mean window's event and element's event return same parameter.
4. don't include padding.

### (my) each element offset solution

- use jquery or other package (easy and typicaly)
- caliculate: element's boundRect And clientX

```js
function getOffset(el, callback) {
  const isWindows = el == window
  // boundingClientRect's x, y are position after margin,padding...etc caliculate.
  const rect = isWindows ? null : el.getBoundingClientRect()
  el.onmousemove = (ev) => {
    const offset = {
      x: ev.clientX - (isWindos ? 0 : rect.x),
      y: ev.clientY - (isWindos ? 0 : rect.y)
    }
    callback(offset)
  }
}
```

## sample code : show _client and offset position_ on browser

Latest version is in this repository.

<details>
<summary>code</summary>

```js
window.onload = () => {
  const bodyRect = document.body.getBoundingClientRect()

  // any element
  function setEvents(el, elText) {
    const isWindow = el == window
    const rect = isWindow ? bodyRect : el.getBoundingClientRect()
    const params = {
      isMouseOver: false,
      isMouseDown: false,
      clientX: 0,
      clientY: 0,
      offsetX: 0,
      offsetY: 0,
      isWindow: isWindow,
      rect: rect
    }

    el.onmousemove = (ev) => {
      params.clientX = ev.clientX
      params.clientY = ev.clientY
      params.offsetX = ev.offsetX
      params.offsetY = ev.offsetY
      updateText(elText, params)
    }
    el.onmouseover = () => {
      params.isMouseOver = true
      updateText(elText, params)
    }
    el.onmouseout = () => {
      params.isMouseOver = false
      updateText(elText, params)
    }
    el.onmousedown = () => {
      params.isMouseDown = true
      updateText(elText, params)
    }
    el.onmouseup = () => {
      params.isMouseDown = false
      updateText(elText, params)
    }
    updateText(elText, params)
  }

  // update
  function updateText(el, params) {
    el.innerHTML =
      'mouse ' +
      (params.isMouseOver ? 'over' : 'out') +
      ' ' +
      (params.isMouseDown ? 'down' : 'up') +
      '<br />' +
      `clientX: ${params.clientX}, clientY: ${params.clientY}` +
      '<br />' +
      `offsetX: ${params.offsetX}, offsetY: ${params.offsetY}` +
      '<br />' +
      `(element)left: ${params.rect.left}, top: ${params.rect.top}` +
      '<br />' +
      `(event - element)ClientX - left: ${
        params.clientX - (params.isWindow ? 0 : params.rect.left)
      }, ClientY - top: ${params.clientY - (params.isWindow ? 0 : params.rect.top)}`
  }

  const doc = document.getElementById('doc')
  const box = document.getElementById('box')
  const box2 = document.getElementById('box2')
  const box2Text = document.getElementById('box2Text')
  const box2In = document.getElementById('box2-in')
  const box3 = document.getElementById('box3')

  setEvents(window, doc)
  setEvents(box, box)
  setEvents(box2, box2Text)
  setEvents(box2In, box2In)
  setEvents(box3, box3)
}
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>mouse event test</title>
    <style>
      * {
        cursor: arrow;
      }

      .box {
        width: 500px;
        border: solid 1px #000;
      }

      .box-sm {
        width: 400px;
        border: solid 1px #000;
      }
    </style>
  </head>

  <body>
    <h1>mouse event test</h1>
    <p id="doc"></p>

    <h2>element</h2>
    <ul>
      <li>run only element innner</li>
    </ul>
    <div id="box" class="box"></div>

    <h2>set style=" position: relative;"</h2>
    <ul>
      <li>change offetX/Y</li>
    </ul>
    <div id="box2" style="position: relative; margin-left: 100px;" class="box">
      <div id="box2Text"></div>
      <div id="box2-in" style="position: relative; margin: 50px;" class="box-sm"></div>
    </div>

    <h2>set style="padding: 50px;"</h2>
    <div id="box3" style="padding: 50px;" class="box"></div>

    <script src="./index.js"></script>
  </body>
</html>
```

</details>

## sample code: check clicked mouse button

- e.which is deprecated

```js
let el: HTMLElement = document.getElementById('app')
if (el) {
  // left click: 1, 0, 0
  el.onclick = (e) => {
    console.log('click', e.button, e.buttons, e.which)
  }

  // without left click
  el.onauxclick = (e) => {
    // right: 2, 0, 3
    // center: 1, 0 ,2
    // ??????: 4, 0, 5
    // ??????: 3, 0, 4
    console.log('auxclick', e.button, e.buttons, e.which)
  }
}
```

<details>

<summary>????????????????????????????????????????????????????????????????????????</summary>

```ts
export const ClickButton = {
  NON: 0,
  LEFT: 1,
  CENTER: 2,
  RIGHT: 3,
  BACK: 4,
  FOWARD: 5
} as const
type ClickButton = typeof ClickButton[keyof typeof ClickButton]

export function checkClickButton(e: MouseEvent): ClickButton {
  switch (e.button) {
    case 0:
      return ClickButton.LEFT
    case 1:
      return ClickButton.CENTER
    case 2:
      return ClickButton.RIGHT
    case 3:
      return ClickButton.BACK
    case 4:
      return ClickButton.FOWARD
    default:
      return ClickButton.NON
  }
}

const Auxes: ClickButton[] = [
  ClickButton.CENTER,
  ClickButton.RIGHT,
  ClickButton.BACK,
  ClickButton.FOWARD
]

export function setOnClickEvents(
  e: HTMLElement,
  events: { button: ClickButton; event: () => void }[]
): void {
  const hasLeft = Boolean(events.find((e) => e.button == ClickButton.LEFT))
  const hasAux = Boolean(events.find((e) => Auxes.includes(e.button)))

  function getButtonEvent(button: ClickButton): () => void | null {
    const e = events.find((event) => event.button == button)
    return e ? e.event : null
  }

  if (hasLeft) {
    e.onclick = (ev) => {
      const button = checkClickButton(ev)
      const event = getButtonEvent(button)
      if (event != null) event()
    }
  }

  if (hasAux) {
    e.onauxclick = (ev) => {
      const button = checkClickButton(ev)
      const event = getButtonEvent(button)
      if (event != null) event()
    }
  }
}
```

</details>
