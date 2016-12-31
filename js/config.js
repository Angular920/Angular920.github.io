app.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'index.html'
        })
        .when('/Models/:key', {
            templateUrl: 'views/models.html',
        })
        .otherwise({
            redirectTo: '/',
            templateUrl: 'index.html'
        });

}]);