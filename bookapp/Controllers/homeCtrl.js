var app = angular.module('bookApp');

app.controller('homeCtrl', function($scope, homeService) {
    $scope.author = 'Charles Dickens';
    $scope.currentFaves = homeService.currentFaves;
    $scope.rateFunction = function(rating) {
    	console.log('at homeCtrl');
        // var _url = 'https:/Services/homeService';

        // var data = {
        //     rating: rating
        // };

        // $http.post(_url, angular.toJson(data), {
        //         cache: false
        //     })
        //     .success(function(data) {
        //         success(data);
        //     })
        //     .error(function(data) {
        //         error(data);
        //     });

    };

});
