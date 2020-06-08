//在JavaScript中，一个函数可以作为另一个函数的参数。我们可以先定义一个函数，然后传递，也可以在传递参数的地方直接定义函数。
//注意：这里传递的是函数本身，而不是返回值
/**
var http = require("http");
http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);
 //以上相当于下面
 */
var http = require("http");
function onRequest(request,response) {
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("函数传递");
    response.end();
};
http.createServer(onRequest).listen(8888);
