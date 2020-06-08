//导入http模块
const http = require('http');
let urlMode = require('url');
//创建一个http服务器
const server = http.createServer();
//服务绑定request请求
server.on('request',function (request,response) {
    /*    const url = request.url;
        if (url ==='/getscript') {
            //拼接一个合法的js脚本，这里拼接的是一个方法的调用
            var srciptStr = 'show()';
            //response.end发送给客户端，客户端去把这个字符串，当做js代码去解析执行，
            //即相当于在客户端添加了" <script>show();</script> ",就会执行客户端的show方法
            response.end(srciptStr);
        }else {
            response.end('404');
        }*/
    const {pathname:url,query} = urlMode.parse(request.url,true);
    if (url ==='/getscript') {

        var data = {
            name:'jack',
            age: 23,
            gender: 'woman'
        }
        //拼接一个合法的js脚本，这里拼接的是一个方法的调用
        var srciptStr = `${query.callback}(${JSON.stringify(data)})`;
        //response.end发送给客户端，客户端去把这个字符串，当做js代码去解析执行，
        //即相当于在客户端添加了" <script>show();</script> ",就会执行客户端的show方法;
        //用url获取客户端传的回调方法，服务端拼接方法，并返回字符串,console打印类'{name: "jack", age: 23, gender: "woman"}'
        response.end(srciptStr);
    }else {
        response.end('404');
    }
});
//监听端口
server.listen(3000,function () {
    console.log("server listen at http://127.0.0.1:3000");
});
