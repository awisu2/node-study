const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

let users = [
  {
    id: 1,
    name: 'a'
  },
  {
    id: 2,
    name: 'b'
  },
  {
    id: 3,
    name: 'c'
  }
]

const findUserById = (id) => {
  return users.findIndex((user) => user.id == id)
}

app.get('/users/', (req, res) => {
  res.send(users)
})

app.post('/users/', (req, res) => {
  users = users.concat(req.body)
  res.send({})
})

app.get('/users/:id', (req, res) => {
  let idx = findUserById(req.params.id)
  let data = null
  if (idx >= 0) {
    data = users[idx]
  }
  res.send(data)
})

app.put('/users/:id', (req, res) => {
  let idx = findUserById(req.params.id)
  let data = null
  if (idx >= 0) {
    users[idx] = req.body
    data = req.body
  }
  res.send(data)
})

app.delete('/users/:id', (req, res) => {
  let idx = findUserById(req.params.id)
  if (idx >= 0) {
    users.splice(idx, 1)
  }
  res.send({})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
