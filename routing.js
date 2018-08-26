const http = require('http');
function index (request, response) { response.writeHead(200); response.end('Hello, World!');
}
var routes = {
    '/': function index (request, response) {
            response.writeHead(200);
            response.end('Hello, World!');
        },
    '/foo': function foo (request, response) { response.writeHead(200);
    response.end('You are now viewing "foo"');
    },
    '/abc': function abc (request, response) { response.writeHead(200);
    response.end('You are now viewing "abc"');
    } }

http.createServer(function (request, response) {
    if (request.url in routes) {
        return routes[request.url](request, response);
            }
            response.writeHead(404);
            response.end(http.STATUS_CODES[404]);
    response.writeHead(404);
    response.end(http.STATUS_CODES[404]);
}).listen(3000);