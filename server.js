const express = require("express");
const app = express();
var path = require('path');
var DIST_DIR = path.join(__dirname, "dist");

app.use('/',express.static(path.join(__dirname, "")));
app.use('/',express.static(path.join(__dirname, "/protos")));

app.use(express.static(DIST_DIR));

app.get("*", function (req, res) {
    res.sendFile(path.join(DIST_DIR, "index.html"));
});

app.listen(8080, function () {
    console.log("App listening on port 8080!");
});
