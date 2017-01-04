app.controller('ModelListController', function($scope, $http) {

    $scope.showModels = function(property) {
        var domainKey = property;
        $http.get("http://dev.nuviot.com/metadata/dox/domains" + "/" + domainKey).then(function(response) {
            $scope.model = response.data;
        });
    }
});