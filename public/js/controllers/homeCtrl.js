'use strict';

var app = angular.module('someApp');

app.controller('homeCtrl', function($scope, $http) {
  console.log('homeCtrl');
  var newTask = {
    task: $scope.task,
    dueby: $scope.dueby
  }
  $http.post("users", function(req, res) {
    if(err) console.log(err)

    console.log("res:", res);

  })

  $http.get("users", function(req, res) {
    if(err) console.log(req, res)

    console.log(res)
  })
});
