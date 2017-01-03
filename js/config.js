app.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/Models/:key', {
            templateUrl: 'views/modelList.html',
        })
        .when('/Models/:key/:classname', {
            templateUrl: 'views/modelDetail.html'
        })
        .otherwise({
            redirectTo: '/',
        });

}]);