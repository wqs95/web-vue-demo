//Node.js 提供了 exports 和 require 两个对象，其中 exports 是模块公开的接口.
//通过exports对象把world作为模块的访问接口，在06_require.js中通过“require("./06_exports")”
//加载这个模块，然后就可以直接访问06_exports.js对象的成员函数
exports.say = function (obj) {
    console.log("say : " + obj);
};
exports.think = function (obj) {
    console.log("think : " + obj);
}