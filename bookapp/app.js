var app = angular.module('bookApp', ['ngRoute']);

    app.config(function($routeProvider) {


        $routeProvider
            .when('/home', {
                templateUrl: 'Views/homeView.html',
                controller: 'homeCtrl'
            })
            .when('/toRead', {
                templateUrl: 'Views/toReadView.html',
                controller: 'toReadCtrl'
                    // resolve: {
                    // 	  teamData: function(teamService, $route) {
                    // 	  return teamService.getTeamData($route.current.params.team);
                    //   }
            })
            .otherwise({
                redirectTo: '/home'
            })
});