const express = require('express')
const ejs = require('ejs')
const path = require('path')

const app = express()
const port = 7777

var count = 0

const increment = (req, res) => {
  res.send({ count: count++ })
}

const counter = (req, res) => {
  res.send({ count: count })
}

app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')

app.get('/api/counter', counter)
app.post('/api/counter', increment)

app.listen(port, () =>
  console.log(`listening at http://localhost:${port}`)
)
