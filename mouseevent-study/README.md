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

## sample code

Latest version is in this repository.

```js
window.onload = () => {
  // any element
  function setEvents(el, elText, params) {
    params.elClientX = el.clientX
    params.elClientY = el.clientY
    const boundingRect = (el == window ? document.body : el).getBoundingClientRect()
    params.elLeft = boundingRect.left
    params.elTop = boundingRect.top

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
      `(element)left: ${params.elLeft}, top: ${params.elTop}` +
      '<br />' +
      `(event - element)ClientX - left: ${
        params.clientX - params.elLeft
      }, ClientY - top: ${params.clientY - params.elTop}`
  }

  const params = {
    isMouseOver: false,
    isMouseDown: false,
    clientX: 0,
    clientY: 0,
    offsetX: 0,
    offsetY: 0,
    elTop: 0,
    elLeft: 0
  }

  const doc = document.getElementById('doc')
  const box = document.getElementById('box')
  const box2 = document.getElementById('box2')
  const box2Text = document.getElementById('box2Text')
  const box2In = document.getElementById('box2-in')
  const box3 = document.getElementById('box3')

  setEvents(window, doc, { ...params })
  setEvents(box, box, { ...params })
  setEvents(box2, box2Text, { ...params })
  setEvents(box2In, box2In, { ...params })
  setEvents(box3, box3, { ...params })
}
```

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>mouse event test</title>
</head>

<body>
  <h1>mouse event test</h1>
  <p id="doc"></p>

  <h2>element</h2>
  <ul>
    <li>run only element innner</li>
  </ul>
  <div id="box" style="width: 300px; height: 300px; border: solid 1px #000;"></div>

  <h2>set style="position: relative;"</h2>
  <ul>
    <li> change offetX/Y</li>
  </ul>
  <div id="box2" style="position: relative; width: 300px; height: 300px; border: solid 1px #000; margin-left: 100px;">
    <div id="box2Text"></div>
    <div id="box3" style="position: relative; width: 200px; height: 150px; border: solid 1px #000; margin-left: 50px;">

    </div>

    <script src="./index.js"></script>
</body>

</html>
```
