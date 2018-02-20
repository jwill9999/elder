var Promise = global.Promise;

/*    ===============================================
       Helper functions for file getResults.js
       @parseData parsed req.body object
       @diffArray returns incorrect answer index []
      ================================================
  */

module.exports = {
  /*  ===============================================
      Parse incoming Answers from req body and return
      the promise
      ================================================
  */
  parseData: function(req) {
    return new Promise((resolve, reject) => {
      let data = req.body.data;
      data
        ? resolve(data)
        : reject(res.status(500).send({ error: "Something failed!" }));
    });
  },

  /*  =================================================
      Diff the correct answers array againts candidates
      answers to identify incorrect response
      ==================================================
  */

  diffArray: function(arr1, arr2, done) {
    var newArr = [];

    function check(first, second, done) {
      for (var i = 0; i < first.length; i++) {
        if (second.indexOf(first[i]) === -1) {
          newArr.push(i);
        }
      }
    }
    check(arr2, arr1);

    return done(null, newArr);
  }
};
