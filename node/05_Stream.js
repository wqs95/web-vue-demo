//流的读取和写入
const type = 2;
if (type == 1) {//文件读取
    let fs = require('fs');
    var data = '';
//创建可读取流
    let readStream = fs.createReadStream("input.txt");
//设置编码
    readStream.setEncoding("UTF-8");
// 处理流事件 --> data, end, and error
    readStream.on("data", function (chunk) {
        data += chunk;
    });
    readStream.on("end", function () {
        console.log(data);
    });
    readStream.on('error', function (err) {
        console.log(err.stack);
    });
    console.log("读取程序执行完毕");
}else if (type == 2) {//文件写入
    var fs = require('fs');
    var data = new Date().toDateString();
    const writeStream = fs.createWriteStream("input.txt");
    writeStream.write(data + " 写入","UTF-8");//UTF-8格式写入
    writeStream.end();// 标记文件末尾
    writeStream.on("finish",function () {
        console.log("写入完成");
    });
    writeStream.on("error",function (err) {
        console.log(err.stack);
    });
    console.log("写入程序执行完毕");
}else if (type == 3) {//管道流:管道提供了一个输出流到输入流的机制
    var fs = require("fs");
// 创建一个可读流
    var readerStream = fs.createReadStream('input.txt');
// 创建一个可写流
    var writerStream = fs.createWriteStream('output.txt');
// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
    readerStream.pipe(writerStream);
    console.log("程序执行完毕");
}else if (type == 4) {//压缩文件
    var fs = require("fs");
    var zlib = require('zlib');
// 压缩 input.txt 文件为 input.txt.gz
    fs.createReadStream('input.txt')
        .pipe(zlib.createGzip())
        .pipe(fs.createWriteStream('input.txt.gz'));
    console.log("文件压缩完成。");
}else if (type == 5) {//解压文件
    var fs = require("fs");
    var zlib = require('zlib');

// 解压 input.txt.gz 文件为 input.txt
    fs.createReadStream('input.txt.gz')
        .pipe(zlib.createGunzip())
        .pipe(fs.createWriteStream('input.txt'));

    console.log("文件解压完成。");
}
