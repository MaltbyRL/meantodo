'use strict';

var mongoose = require('mongoose');



var todoSchema = new mongoose.Schema({
  task: String,
  dueby: Date,
  completed: Boolean
});

// instance method
userSchema.methods = function() {
  var payload = {
    task = this.task
    dueby = this.dueby
    completed = this.completed
  };


return payload
};



var Task = mongoose.model('Task', todoSchema);

module.exports = Task;
