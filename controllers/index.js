var express = require("express");
var router = express.Router();

/*    ===========================================
            GET Request for Index.html 
            @route '/' 
            @Renders Index.html          
      ===========================================
*/

router.get("/", (req, res) => {
  res.render("index");
});

module.exports = router;
