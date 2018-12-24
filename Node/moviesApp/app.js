let http = require('http');

let server = http.createServer(function(req, res){
    res.write("<h1>"+"Server is running"+"</h1>")
    res.end();
})

server.listen(6700);