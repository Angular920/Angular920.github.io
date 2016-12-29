angularApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'index.html'
        })
        .when('Angular920.github.io/Domains', {
            templateUrl: '<h1>Routing Test</h1>'
        })
        .when('Angular920.github.io/Models', {
            templateUrl: 'views/models.html'
        })
        .otherwise({
            redirectTo: 'Angular920.github.io'
        });

}]);