'use strict';

var app = angular.module('ricksApp');

app.controller('homeCtrl', function($scope, $http) {
  console.log('homeCtrl');
  var newTask = {
    task: $scope.task,
    dueby: $scope.dueby
  }
  function sendTodo(newTask){
    console.log("button clicked:", $scope.this)
    $http.post("/", function(req, res) {
      if (err) console.log(err)

      console.log(".post res:", res);

    });

}



  $http.get("/")
    .then(function(data) {
      console.log("data:", data)
      $scope.todo = data.data
      console.log("$scope.user:", $scope.todo);



    });

});
