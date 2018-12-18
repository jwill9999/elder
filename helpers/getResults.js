var { parseData, diffArray } = require("./postData");
//var model = require("../model/questions");
var questionSchema = require('../model/Schema/QuestionSchema');
// TODO: sort out parsing of answers
/*  ===============================================
      Recieves POST Answers from Client
      Calls helper functions in postData.js.
      results returned to Client
      @returned 
      data: {
              incorrectIndex: [],
              totalQuestions: number,
              totalIncorrect: number
            }

      ================================================
  */
module.exports = {
  getResults: (req, res) => {
    /*   =====================================
         data returned from candidates answers
         =====================================
    */

    let clientData = parseData(req);

    clientData
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

      const arr1 = questionSchema.find((err, databaseData) => {
        if(err){
          console.log(err.message);
        } else {
          databaseData.map(answers => {
            console.log('*******',answers.answer)
             return answers.answer;
           });

        }


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
