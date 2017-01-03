app.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/Models/:key', {
            templateUrl: 'views/models.html',
        })
        .when('/Models/:key/:class', {
            templateUrl: 'views/classes.html'
        })
        .otherwise({
            redirectTo: '/',
        });

}]);