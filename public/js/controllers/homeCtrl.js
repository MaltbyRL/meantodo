'use strict';

var app = angular.module('ricksApp');

app.controller('homeCtrl', function($scope, $http) {
  console.log('homeCtrl');
  var newTask = {
    task: $scope.task,
    dueby: $scope.dueby
  }
  $http.post("users", function(req, res) {
    if(err) console.log(err)

    console.log(".post res:", res);

  })

  $http.get("users", function(req, res) {
    if(err) console.log(req, res)

    console.log(".get res",res)
  })
});
