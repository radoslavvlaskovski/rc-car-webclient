const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const AUTH = true;
var path = require('path');
var basicAuth = require('express-basic-auth')
var DIST_DIR = path.join(__dirname, "./src/");
var direction = "s";
var d = new Date();
var lastTimeUpdated = d.getTime();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(DIST_DIR));

app.post('/setDirection',function(req,res){
    direction = req.body.direction;
    console.log("direction: " + direction);
    d = new Date();
    lastTimeUpdated = d.getTime();
    res.end("yes");
});

app.get('/getDirection',function(req,res){
    var tempDate = new Date();

    console.log(tempDate.getTime(), " ",  lastTimeUpdated,"  ",tempDate.getTime() - lastTimeUpdated);
    if (tempDate.getTime() - lastTimeUpdated > 2000) {
        //direction = 's';
    }
    res.send(direction);
});



if (AUTH) {
    app.use(basicAuth({
        //@lE><t0s|<0V
        users: { 'admin': 'admin' },
        challenge: true,
        realm: 'Imb4T3st4pp'
    }));
}

app.get("*", function (req, res) {
    res.sendFile(path.join(DIST_DIR, "index.html"));
});

app.listen(8080, function () {
    console.log("App listening on port 8080!");
});
