app.controller('ModelListController', function($scope, $http) {

    $scope.showModels = function(key) {
        console.log(key);
    }
    $http.get("http://dev.nuviot.com/metadata/dox/domains" + "/" + key).then(function(response) {
        $scope.model = response.data;
    });
});