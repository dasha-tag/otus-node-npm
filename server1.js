const http = require('http');
const fs = require('fs')

const hostname = '127.0.0.1';
const port = 3002;

const server = http.createServer((req, res) => {
    fs.readFile('./index.html', {encoding: 'utf-8'}, (err, data) => {
        if (err) throw err;
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        console.log('hi');
        res.end(data);
    })
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
