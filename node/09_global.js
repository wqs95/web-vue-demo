/**
 global 最根本的作用是作为全局变量的宿主。按照 ECMAScript 的定义，满足以下条 件的变量是全局变量：
    在最外层定义的变量；在 Node.js 中你不可能在最外层定义变量，因为所有用户代码都是属于当前模块的， 而模块本身不是最外层上下文。
    全局对象的属性；
    隐式定义的变量（未定义直接赋值的变量）。
 */
console.log("当前执行脚本所在的目录:" + __dirname);
console.log("当前正在执行的脚本文件名(绝对路径):" + __filename);
setTimeout(function () {
    console.log("全局函数在1000ms后执行执行一次！");
},1000);
//clearTimeout( t ) 全局函数用于停止一个之前通过 setTimeout() 创建的定时器,参数 t 是通过 setTimeout() 函数创建的定时器。
var internal = setInterval(function () {
    console.info(new Date().toTimeString() + " setInterval--循环执行，" +
        "直到 clearInterval() 被调用或窗口被关闭。");
},1000);
clearInterval(internal);

console.log("==================process全局变量====================");
process.stdout.write("stdout -- 标准输出流");
