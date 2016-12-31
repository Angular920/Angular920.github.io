app.controller('ModelController', function($scope, $http, $routeParams) {
    $http.get("http://dev.nuviot.com/metadata/dox/domains" + $routeParams.key).then(function(response) {
        $scope.model = response.data;
    });
});