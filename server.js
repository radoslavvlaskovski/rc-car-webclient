const express = require("express");
const app = express();
var path = require('path');

app.use('/',express.static(path.join(__dirname, "")));
app.use('/',express.static(path.join(__dirname, "/protos")));


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080, function () {
    console.log("App listening on port 8080!");
});
