const fs = require('fs/promises')

const handler = async (req, res) => {
    const data = await fs.readFile('index.html', {encoding: 'utf-8'})
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(data)
}

const a = 5;
module.exports = {handler, a}
