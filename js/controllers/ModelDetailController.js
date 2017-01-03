app.controller('ModelDetailController', function($scope, $http, $routeParams) {
    $http.get("http://dev.nuviot.com/metadata/dox/entity" + "/" + $routeParams.key + "/" + $routeParams.classname).then(function(response) {
        $scope.details = response.data;
    })
})