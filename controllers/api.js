var express = require("express");
var router = express.Router();
var api = require("../model/questions");
/* GET home page. */
router.get("/data", (req, res) => {
  res.json({
    api
  });
});

module.exports = router;
