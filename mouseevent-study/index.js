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
