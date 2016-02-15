'use strict';

var mongoose = require('mongoose');



var todoSchema = new mongoose.Schema({
  task: String,
  dueby: Date,
  completed: Boolean
});




var Task = mongoose.model('Task', todoSchema);

module.exports = Task;
