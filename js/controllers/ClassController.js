app.controller('ClassController', function($scope, $http, $routeParams) {
    $http.get("http://dev.nuviot.com/metadata/dox/entity" + "/" + $routeParams.key + "/" + $routeParams.class).then(function(response) {
        $scope.class = response.data;
    })
})