var angularApp = angular.module('angularApp',['ngRoute']);

angularApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('Angular920.github.io', {
            templateUrl: 'index.html'
        })
        .when('Angular920.github.io/Models', {
            templateUrl: 'views/models.html'
        })
        .otherwise({
            redirectTo: 'Angular920.github.io'
        });

}]);