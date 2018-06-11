var path = require("path");

var DIST_DIR   = path.join(__dirname, "dist"),
    CLIENT_DIR = path.join(__dirname, "src");

module.exports = {
    context: CLIENT_DIR,

    entry: "./client",

    output: {
        path:     DIST_DIR,
        filename: "bundle.js"
    },
    node: {
        fs: 'empty',
        child_process : 'empty'
    },
    resolve: {
        extensions: ['.js']
    }
};