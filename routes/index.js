var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
  res.render("index", { title: "Express", project: "Elder Project" });
});

module.exports = router;
