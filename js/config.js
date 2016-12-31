app.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: '<div><h4>Testing</h4></div>'
        })
        .when('/Domains', {
            templateUrl: 'views/domains.html'
        })
        .when('/Models/:key', {
            templateUrl: 'views/models.html',
        })
        .otherwise({
            redirectTo: 'Angular920.github.io'
        });

}]);