const http = require('http')
const {handler, a} = require('./handler');
const hostname = '127.0.0.1'
const port = 3001

const server = http.createServer(handler)

server.listen(port, hostname, () => {
    console.log(a)
    console.log('server listen port ', port)
})
