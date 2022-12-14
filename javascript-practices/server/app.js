// node에만 있는 코드를 사용하여 브라우저에서는 돌지 않는다.
// terminal에서는 ./server > node app
// localhost:8080 로 접근

const http = require('http');

const server = http.createServer(function(req, resp) {
    resp.writeHead(200, {
        'Content-Type': 'text/html'
    });

    resp.end('<h1>Hello World</h1>');
});

server.listen(8080, function(){
    console.log("server starts...")
});

