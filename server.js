let app, server,
  express = require('express'),
  path = require('path'),
  host = process.env.HOST || '192.168.0.111' || '127.0.0.1',
  port = process.env.PORT || 3000,
  root = path.resolve(__dirname, '.')

app = express()

app.use ((req, res, next) => {
  console.log(req.url); next() 
})

app.use(
  express.static('public'))

server = app.listen(port, host, serverStarted)

function serverStarted () {
    console.log('Server started', host, port)
    console.log('running server in :', root)
}
