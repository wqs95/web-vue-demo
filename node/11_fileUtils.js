//文件系统
var fs = require("fs");
//读取文件
function readFile(pathname) {
    let readWay = 1;//异步
    if (readWay == 1) {
        fs.readFile(pathname, function (err, data) {
            if (err) {
                return console.error(err);
            }
            console.log("异步读取 : "+data.toString());
        });
    }else if (readWay == 2) {
        var data = fs.readFileSync(pathname);
        console.log("同步读取 : "+data.toString());
    }
}
//打开文件：fs.open(path--路径, flags--打开行为, mode--文件权限--0666可读可写, callback(err, fd)回调)
function open(pathname) {
    fs.open(pathname,"r+",function (err,fd) {
        if (err) {
            return console.error(err);
        }
        console.log("文件"+pathname + "打开成功");
    });
}
//获取文件信息：fs.stat(path--路径, callback(err, stats))
function fileInfo(pathName) {
    fs.stat(pathName,function (err,stats) {
        console.log(pathName + "是文件吗 " + stats.isFile());
        console.log(pathName + "是文件夹吗 " + stats.isDirectory());
        console.log(pathName + "是块设备吗 " + stats.isBlockDevice());
        console.log(pathName + "是字符设备吗 " + stats.isCharacterDevice());
        console.log(pathName + "是软链接吗 " + stats.isSymbolicLink());
        console.log(pathName + "是FIFO吗 " + stats.isFIFO());
        console.log(pathName + "是Socket 吗 " + stats.isSocket());
    })
}
//写入文件:fs.writeFile(file--文件名, data--写入信息, options--参数对象
// (编码为 utf8, 模式为 0666 ， flag 为 'w'), callback(err))
function writeFile(pathName,data) {
    fs.writeFile(pathName,data,function (err) {
        if (err) {
            return console.error(err);
        }
        console.log("数据写入成功");
    });
}
//读取文件:fs.read(fd-fs.open() 方法返回的文件描述符, buffer--数据缓冲区, offset--缓冲偏移, length--要读字节数,
// position--文件读取位置(null则从当前指针开始), callback(err, bytesRead, buffer))
function readFile(fileName) {
    //先打开文件，再读取文件
    fs.open(fileName,"r+",function (err,fd) {
        if (err) {
            return console.error(err);
        }
        console.log("文件成功打开");
        let buf = new Buffer.alloc(1024);
        fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
            if (err){
                console.log(err);
            }
            console.log(bytes + "  字节被读取");

            // 仅输出读取的字节
            if(bytes > 0){
                console.log(buf.slice(0, bytes).toString());
            }
        });
    });
}
//关闭文件：fs.close(fd--fs.open() 方法返回的文件描述符, callback)
function close(pathName) {
    fs.open(pathName, 'r+', function(err, fd) {
        if (err) {
            return console.error(err);
        }
        console.log("文件打开成功！");
        console.log("准备读取文件！");
        fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
            if (err){
                console.log(err);
            }
            // 仅输出读取的字节
            if(bytes > 0){
                console.log(buf.slice(0, bytes).toString());
            }
            // 关闭文件
            fs.close(fd, function(err){
                if (err){
                    console.log(err);
                }
                console.log("文件关闭成功");
            });
        });
    });

}
//截取文件:fs.ftruncate(fd--fs.open() 方法返回的文件描述符, len--截取的长度, callback)
function jiequ(pathName) {
    fs.open(pathName, 'r+', function(err, fd) {
        if (err) {
            return console.error(err);
        }
        console.log("文件打开成功！");
        console.log("截取10字节内的文件内容，超出部分将被去除。");
        // 截取文件
        fs.ftruncate(fd, 10, function(err){
            if (err){
                console.log(err);
            }
            console.log("文件截取成功。");
            console.log("读取相同的文件");
            fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
                if (err){
                    console.log(err);
                }
                // 仅输出读取的字节
                if(bytes > 0){
                    console.log(buf.slice(0, bytes).toString());
                }

                // 关闭文件
                fs.close(fd, function(err){
                    if (err){
                        console.log(err);
                    }
                    console.log("文件关闭成功！");
                });
            });
        });
    });
}
//删除文件：fs.unlink(path--文件路径, callback)
function deleteFile(pathName) {
    fs.unlink(pathName, function(err) {
        if (err) {
            return console.error(err);
        }
        console.log("文件删除成功！");
    });
}
//创建目录：fs.mkdir(文件路径, recursive(递归创建，false)或mode(目录权限，0777) , callback(无参回调函数))
function createFolder(folderName) {
    fs.mkdir(folderName,function (err) {
        if (err) {
            return console.error(err);
        }
        console.info("目录创建成功");
    });
}
//读取目录：fs.readdir(path(文件路径), callback(错误信息error、目录下文件数组列表files))
function readFolder(folderName) {
    fs.readdir(folderName,function (err,files) {
        if (err) {
            return console.error(err);
        }
        files.forEach(function (file) {
            console.log(file);
        });
    });
}
//删除目录：fs.rmdir(path(文件路径), callback(回调函数，没有参数))
function deleteFolder(folderName) {
    fs.rmdir(folderName,function (err) {
        if (err) {
            return console.error(err);
        }
        console.log("目录删除成功");
    });
}
