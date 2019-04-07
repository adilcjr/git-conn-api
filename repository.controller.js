var pool = require("./config/db_connection");

var express = require("express");

var router = express.Router();

router.get("/", (req, res) => {
    pool.query("select * from repositories", (err, result, fields) => {
        if (err) {
            throw new Error(err);
        } else {
            res.send(result);
        }
    });
});

router.get("/:id", (req, res) => {
    pool.query("select * from repositories where id=" + req.params.id, (err, result, fields) => {
        if (err) {
            throw new Error(err);
        } else {
            res.send(result);
        }
    });
});

router.post("/", (req, res) => {
    var name = req.body.name;
    var description = req.body.description;
    var stargazers_count = req.body.stars;
    var watchers_count = req.body.watchers;
    var html_url = req.body.html_url;
    pool.query("insert into repositories values('" + name + "', '" + description + "', " + stargazers_count + ", " + watchers_count + ", '" + html_url + "')", 
        (err, result) => {
            if (err) {
                throw new Error(err);
            } else {
                res.send(result);
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
    pool.query("update repositories set name='" + name + "', description='" 
        + description + "', stars=" + stars + "', watchers=" + watchers + "', html_url=" + html_url + 
        " where id=" + id, 
        (err, result) => {
            if (err) {
                throw new Error(err);
            } else {
                res.send(result);
            }
        }
    );
});

router.delete("/:id", (req, res) => {
    pool.query("delete from product where id=" + req.params.id, 
        (err, result) => {
            if (err) {
                throw new Error(err);
            } else {
                res.send(result);
            }
        }
    );
});


module.exports = router;