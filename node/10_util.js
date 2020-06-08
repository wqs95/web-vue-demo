/**
 * ====util 是一个Node.js 核心模块，提供常用函数的集合，用于弥补核心 JavaScript 的功能 过于精简的不足。=====
 * */
//util.callbackify(original) 将 async 异步函数（或者一个返回值为 Promise 的函数）转换成遵循异常优先的回
// 调风格的函数，例如将 (err, value) => ... 回调作为最后一个参数。
console.log("----1、 util.callbackify ------")
const util = require('util');
async function fn() {
    return 'hello world';
}
const callbackFunction = util.callbackify(fn);
callbackFunction((err, ret) => {
    if (err) throw err;
    console.log(ret);
});
//util.inherits(constructor, superConstructor) 是一个实现对象间原型继承的函数。
console.log("----2、 util.inherits ------")
var util = require('util');
function Base() {
    this.name = 'base';
    this.base = 1991;
    this.sayHello = function() {
        console.log('Hello ' + this.name);
    };
}
Base.prototype.showName = function() {
    console.log(this.name);
};
function Sub() {
    this.name = 'sub';
}
util.inherits(Sub, Base);
var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);
var objSub = new Sub();
objSub.showName();
//objSub.sayHello();
console.log(objSub);
//util.inspect(object,[showHidden],[depth],[colors]) 是一个将任意对象转换 为字符串的方法，通常用于调试和错误输出。
console.log("----2、 util.inspect ------")
var util = require('util');
function Person() {
    this.name = 'byvoid';
    this.toString = function() {
        return this.name;
    };
}
var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj, true));
//util.isArray(object) : 如果给定的参数 "object" 是一个数组返回 true，否则返回 false。
//util.isRegExp(object) : 如果给定的参数 "object" 是一个正则表达式返回true，否则返回false。
//util.isDate(object) : 如果给定的参数 "object" 是一个日期返回true，否则返回false。