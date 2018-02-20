var { parseData, diffArray } = require("./postData");
var model = require("../model/questions");

module.exports = {
  getResults: (req, res) => {
    /*   =====================================
         data returned from candidates answers
         =====================================
    */

    let parsedData = parseData(req);

    parsedData
      .then(data => {
        parseAnswers(data);
      })
      .catch(e => {
        res.status(500).send({ error: "Something failed!" });
      });

    /*  ===============================================================
          extract as array the answers from returned candidate object
        ================================================================  
    */

    let parseAnswers = data => {
      /*  ==============================================================
        Map over Model data and extract the answers so we can compare
        against candidates response
        ================================================================
    */

      const arr1 = model.map(answers => {
        return answers.answer;
      });

      /*  ==========================
        extract Object values only
        from answers
        ===========================
    */

      let arr2 = Object.values(data);

      /*  ====================================================
          diff the answers and correct answers for differences
          returns incorrect index
          =====================================================
    */

      diffArray(arr1, arr2, function(err, results) {
        if (err) {
          res.status(500).send({ error: "Something failed!" });
        } else {
          res.send({
            data: {
              incorrectIndex: results,
              totalQuestions: arr2.length,
              totalIncorrect: results.length
            }
          });
        }
      });
    };
  }
};
