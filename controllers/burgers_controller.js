var express = require("express");

const { response } = require("express");
var burger = require("../models/burger");
var router = express.Router();

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne([
        "burger_name", "ate"
    ], [
        req.body.burger_name, req.body.ate
    ], function(res) {
        res.json({ id: res.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.updateOne({
        ate: req.body.ate
    }, condition, function (res) {
        if (res.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        };
    });
});


module.exports = router;
