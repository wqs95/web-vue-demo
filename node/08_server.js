var http = require("http");
var url = require("url");

function start(route) {
    function onRequest(request,response) {
        var pathname = url.parse(request.url).pathname;
        route(pathname);
        response.writeHead(200,{"Content-Type":"text/plain"});
        response.write("node.js路由")
        response.end();
    }
    http.createServer(onRequest).listen(9000);
    console.log("Server has started");
}
exports.start = start;