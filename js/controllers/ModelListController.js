app.controller('ModelListController', function($scope, $http) {

    $scope.search = function(param) {
        $http.get("http://dev.nuviot.com/metadata/dox/domains" + "/" + param).then(function(response) {
            $scope.model = response.data;
        });
    }
});