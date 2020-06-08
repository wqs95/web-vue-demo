//Node.js 提供了 exports 和 require 两个对象
//"./"当前文件夹，引入的是当前文件夹下的06_exports.js,默认后缀是js,就不写了。
//require 用于从外部获取一个模块的接口,即所获取模块的 exports 对象。
var type = 2;
if (type == 1) {
    const hello = require("./06_exports");
    hello.say("创建模块");
    hello.think("创建模块");
}else if (type == 2) {
    let Person = require("./06_exports_01");
    person = new Person();
    person.setName("jack");
    console.log(person.getName());
}