app.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/Home', {
            templateUrl: 'views/Home.html'
        })
        .when('/Translation', {
            templateUrl: 'views/Translation.html'
        })
        .otherwise({
            redirectTo: '/Home'
        })
}]);