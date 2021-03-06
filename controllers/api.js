const express = require("express");
const router = express.Router();
const model = require("../model/questions");
const api = require("../model/questions");
const { getResults } = require("../helpers/getResults");

/*  ==========================================
    GET Request from candidates for questions
    @route /api/data
    @Renders JSON from Questions Model
    ==========================================
*/

router.get("/data", (req, res) => {
  res.json({
    api
  });
});

/*    ===========================================
      POST Request data from candidates answers
      ===========================================
  */

router.post("/results", getResults);

module.exports = router;
