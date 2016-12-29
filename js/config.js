angularApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('Angular920.github.io/Domains', {
            templateUrl: 'views/domains.html'
        })
        .when('Angular920.github.io/Models', {
            templateUrl: 'views/models.html'
        })
        .otherwise({
            redirectTo: 'Angular920.github.io'
        });

}]);