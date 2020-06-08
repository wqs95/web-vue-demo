//将对象封装为一个模块
//模块接口的唯一变化是使用 module.exports = Hello
// 代替了exports.world = function(){}。 在外部引用该模块时，
// 其接口对象就是要输出的 Hello 对象本身，而不是原先的 exports。
/**https://blog.csdn.net/qq_40885461/article/details/88547896
 * 在Node中，每个模块内部都有一个自己的module对象,该module对象中，有一个成员叫：exports也是一个对象。
 * 也就是说如果你需要对外导出成员，只需要把导出的成员挂载到 module.exports 中。
 * 但是每次导出接口成员的时候都通过 module.exports.xxx = xxx 的方式很麻烦，所以，Node 为了简化你的操作，
 * 专门提供了一个变量 ：var exports = module.exports。
 * 给exports或module.exports赋值，都会断开exports和module.exports的连接。
 * 而默认在代码的最后有一句：return module.exports。
 *
 * https://www.cnblogs.com/sure2016/p/10511879.html
 * https://blog.csdn.net/andy296925354/article/details/52609149?depth_1-utm_
 * source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnP
 * ai2-1&utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1
 */
function Person() {
    var name;
    this.setName = function (newName) {
        name = newName;
    };
    this.getName = function () {
        console.log("getName："+name);
        return name;
    }
};
module.exports = Person;