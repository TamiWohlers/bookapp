var app = angular.module('bookApp');

app.controller('homeCtrl', function($scope, homeService){
  $scope.author = 'Charles Dickens';
  $scope.currentFaves = homeService.currentFaves;
});