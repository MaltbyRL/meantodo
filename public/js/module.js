"use strict";
var app = angular.module('ricksApp');


app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {url: '/', template: "<h1>HOME</h1>", controller: 'homeCtrl'})
    .state('list', {url: '/list', template: "<h1>LIST</h1>", controller: 'listCtrl'})


  $urlRouterProvider.otherwise('/');
});
