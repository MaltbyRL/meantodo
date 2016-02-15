
Todo = require('../models/todomodel')



router.post('/', function(req, res, next) {
	console.log('req.body', req.body)
  ref.createTodo(req.body, function(err, userData) {
    if(err) return res.status(400).send("err",err);
    var task = req.body.task
    var dueby = req.body.dueby
    var completed = req.body.completed
    console.log("task", task)
    console.log("Routes/req", req.body);
 Todo.create({task: task, dueby: dueby, completed: completed}, function(err, newtodo) {
   if(err) return res.status(400).send(err);
      res.send();
    });
  });
});
