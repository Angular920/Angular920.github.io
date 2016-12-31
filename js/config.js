app.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/Models/:key', {
            templateUrl: 'views/models.html',
        })
        .otherwise({
            redirectTo: 'Angular920.github.io'
        });

}]);