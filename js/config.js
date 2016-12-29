angularApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: '<div><h4>Testing</h4></div>'
        })
        .when('/Domains', {
            templateUrl: '<div class="card"><div class="card-header"><h4 class="card-title">State Machine</h4></div></div>'
        })
        .when('/Models', {
            templateUrl: 'views/models.html'
        })
        .otherwise({
            redirectTo: 'Angular920.github.io'
        });

}]);