function route(pathname) {
    console.log(new Date().toDateString());
    console.log("About to route a request for " + pathname);
}
exports.route = route;