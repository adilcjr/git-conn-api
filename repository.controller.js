var dbconn = require("./config/db_connection");

var connection = dbconn.getConnection();

connection.connect();

var express = require("express");

var router = express.Router();

router.get("/", (req, res) => {
    connection.query("select * from repositories", (err, rows, fields) => {
        if (err) {
            console.error("Error fetching data");
        } else {
            res.send(rows);
        }
    });
});

router.get("/:id", (req, res) => {
    connection.query("select * from repositories where id=" + req.params.id, (err, records, fields) => {
        if (err) {
            console.error("Error fetching data");
        } else {
            res.send(records);
        }
    });
});

router.post("/", (req, res) => {
    var name = req.body.name;
    var description = req.body.description;
    var stargazers_count = req.body.stargazers_count;
    var watchers_count = req.body.watchers_count;
    var html_url = req.body.html_url;
    connection.query("insert into repositories values('" + name + "', '" + description + "', " + stars + ", " + watchers + ", '" + html_url + "')", 
        (err, result) => {
            if (err) {
                console.error("Error while inserting data" + err);
            } else {
                res.send({insert: "success"});
            }
        }
    );
});

router.put("/", (req, res) => {
    var id = req.body.id;
    var name = req.body.name;
    var description = req.body.description;
    var stars = req.body.stargazers_count;
    var watchers = req.body.watchers_count;
    var html_url = req.body.html_url;
    connection.query("update repositories set name='" + name + "', description='" 
        + description + "', stars=" + stars + "', watchers=" + watchers + "', html_url=" + html_url + 
        " where id=" + id, 
        (err, result) => {
            if (err) {
                console.error("Error while inserting data" + err);
            } else {
                res.send({insert: "success"});
            }
        }
    );
});

router.delete("/:id", (req, res) => {
    connection.query("delete from product where id=" + req.params.id, (err, records, fields) => {
        if (err) {
            console.error("Error while deleting data");
        } else {
            res.send({delete: "Delete success"});
        }
    });
});


module.exports = router;