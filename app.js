const http = require('http');
const fs = require('fs');
const PORT = 3000;
const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.writeHead(200, { "content-Type": "text/html" });
        fs.readFile('home.html', "utf8",function (err, data) {
          if (err) return console.error(err);
          res.write(data);
          res.end();
        });
    } else
        if (req.url == "/about") {
            res.writeHead(200, { "content-Type": "text/html" });
            res.write('<h1> Hello World! About page</h1>');
            res.end();
        } else {
            res.writeHead(404, { "content-Type": "text/html" });
            res.write('<h1>Page not found !!</h1>');
            res.end();
        }
})

console.log(`Server running on PORT http://localhost:${PORT}`)
server.listen(PORT);