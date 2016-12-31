app.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/Models/:key', {
            templateUrl: 'views/models.html',
        })
        .otherwise({
            redirectTo: '/',
            templateUrl: 'index.html'
        });

}]);