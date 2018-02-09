var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/data", (req, res) => {
  console.log("hit api");
  res.send({
    data:
      "Your Data is being sent to your React project from the server congratulations !!!"
  });
});

module.exports = router;
