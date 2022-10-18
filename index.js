const http = require('http')
const fs = require('fs')
const url = require('url')

http.createServer(function(req, res) {
    console.log(url.parse(req.url).pathname)
    let path = null
    switch(req.url) {
        case '/':
            path = 'index.html'
            break  
        case '/about':
            path = 'about.html'
            break
        case '/contact-me':
            path = 'contact-me.html'
            break
        default:
            path = '404.html'
            break
    }

    fs.readFile(path, function(err, data) {
        res.setHeader('Content-Type', 'text/html')
        res.end(data)
    })
}).listen(3000, function() {
    console.log('Listening on port 3000')
})
