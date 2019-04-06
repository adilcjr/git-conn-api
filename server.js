var express = require("express");
var bodyparser = require("body-parser");

var app = express();
app.use(express.logger());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
});

var repositoryAPI = require("./repository.controller");

app.use("/api/repositories", repositoryAPI);
// app.get('/*', function(req,res) {    
//     res.sendFile(path.join(__dirname+'/dist/git-conn-app/index.html'));
// });

app.listen(process.env.PORT || 8080);
console.log("Backend server up and running on port 8080!");