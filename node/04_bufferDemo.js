// let alloc = Buffer.alloc(10);// 创建一个长度为 10、且用 0 填充的 Buffer。
// let alloc1 = Buffer.alloc(10,1);// 创建一个长度为 10、且用 0x1 填充的 Buffer。
// let from = Buffer.from(10);//以参数初始化的Buffer实例
// let from1 = Buffer.from("buffer","utf-8");
// console.log(
//     "alloc："+alloc.write("hello1") + "</br>"+
//     "alloc1："+alloc1.write("hello2") + "</br>"+
//     "from："+from.write("hello3") + "</br>"+
//     "from1："+from1.write("hello4")+ "</br>"
// );
let from = Buffer.alloc(100);
let len = from.write("hello buffer");
console.log("len : " + len);
console.log(from.toString("utf-8",2,10));




