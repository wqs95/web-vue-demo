var server = require("./08_server");
var router = require("./08_router");

server.start(router.route);