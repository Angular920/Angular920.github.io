app.controller('ModelListController', function($scope, $http) {

    $scope.showModels = function(property) {
        
        $http.get("http://dev.nuviot.com/metadata/dox/domains" + "/" + property).then(function(response) {
            $scope.model = response.data;
        });
    }
});