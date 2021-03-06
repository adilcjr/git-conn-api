var pool = require("./config/db_connection");

var express = require("express");

var router = express.Router();

router.get("/", (req, res) => {
    pool.query("select * from repositories", (err, result, fields) => {
        if (err) {
            console.error(err);
        } else {
            res.send(result);
        }
    });
});

router.get("/:id", (req, res) => {
    pool.query("select * from repositories where id=" + req.params.id, (err, result, fields) => {
        if (err) {
            console.error(err);
        } else {
            res.send(result);
        }
    });
});

router.post("/", (req, res) => {

    var name = req.body.name;
    var description = req.body.description;
    var stargazers_count = req.body.stargazers_count;
    var watchers_count = req.body.watchers_count;
    var html_url = req.body.html_url;
    var language = req.body.language;
    pool.query("insert into repositories (name, description , stargazers_count, watchers_count, html_url, language) " 
        + " values('" + name + "', '" + description + "', " + stargazers_count + ", " + watchers_count + ", '" + html_url + "', '" + language + "')", 
        (err, result) => {
            if (err) {
                console.error(err);
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
    var language = req.body.language;
    pool.query("update repositories set name='" + name + "', description='" + description + "', stargazers_count=" + stars 
        + "', watchers_count=" + watchers + ", html_url='" + html_url + "', language='" + language + " where id=" + id, 
        (err, result) => {
            if (err) {
                console.error(err);
            } else {
                res.send(result);
            }
        }
    );
});

router.delete("/:id", (req, res) => {
    pool.query("delete from repositories where id=" + req.params.id, 
        (err, result) => {
            if (err) {
                console.error(err);
            } else {
                res.send(result);
            }
        }
    );
});


module.exports = router;