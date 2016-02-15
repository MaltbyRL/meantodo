var express = require('express');
var router = express.Router();

var User = mongoose.model('User', userSchema);

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  task:
});




module.exports = User;


module.exports = router;
