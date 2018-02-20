var express = require("express");
var router = express.Router();

/*    ===========================================
            GET Request for Index.html 
            @route /           
      ===========================================
*/

router.get("/", (req, res) => {
  res.render("index");
});

module.exports = router;
