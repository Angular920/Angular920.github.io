angularApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'index.html'
        })
        .when('/Domains', {
            templateUrl: '<h1>Routing Test</h1>'
        })
        .when('/Models', {
            templateUrl: 'views/models.html'
        })
        .otherwise({
            redirectTo: 'Angular920.github.io'
        });

}]);