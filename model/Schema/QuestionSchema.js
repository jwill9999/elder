const mongoose = require("mongoose");



const questionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  choices: [String],
  answer: { type: String, required: true }
  
});



module.exports = mongoose.model('Question', questionSchema );