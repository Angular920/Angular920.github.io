app.controller('ModelDetailController', function($scope, $http, $routeParams) {
    $http.get("http://dev.nuviot.com/metadata/dox/entity" + "/" + "DeviceAdmin" + "/" + "Action").then(function(response) {
        $scope.details = response.data;
    })
})