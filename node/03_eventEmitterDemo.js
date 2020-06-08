//events只提供了一个EventEmitter对象--核心就是事件的出触发和封装
const EventEmitter  = require('events').EventEmitter;
//新建监视器
let listener = new EventEmitter();
listener.on("some_event",function () {
    console.log("some_event事件触发");
});
//一次定时器，1s后触发
setTimeout(function () {
    listener.emit("some_event");
},1000);