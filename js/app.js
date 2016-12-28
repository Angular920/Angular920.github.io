var angularApp = angular.module('Angular920',['ngRoute']);

angularApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('Angular920.github.io', {
            templateUrl: 'index.html', 
            controller: 'DomainController'
        })
        .when('Angular920.github.io/Models', {
            templateUrl: 'models.html'
        })
        .otherwise({
            redirectTo: 'Angular920.github.io'
        });

}]);