app.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/Home', {
            templateURL: 'views/Home.html'
        })
        .when('/Translation', {
            templateURL: 'views/Translation.html'
        })
        .otherwise({
            redirectTo: '/Home'
        })
}]);