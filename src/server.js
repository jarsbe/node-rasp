const express = require('express')
const ejs = require('ejs')
const path = require('path')
const http = require('http')
const socket = require('socket.io')

const app = express()
const port = 7777

const server = http.createServer(app)
const io = socket(server)

var count = 0

const increment = (req, res) => {
  io.emit('increment', { count: count++ })
  res.sendStatus(200)
}

const counter = (req, res) => {
  res.send({ count: count })
}

const index = (req, res) => {
  res.render('index', {count: count})
}

app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/api/counter', counter)
app.post('/api/counter', increment)

app.get('/', index)

server.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
});
