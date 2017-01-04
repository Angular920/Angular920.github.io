app.controller('ModelListController', function($scope, $http) {

    $scope.showModels = function(key) {
        var domainKey = key;
        console.log(domainKey);
        $http.get("http://dev.nuviot.com/metadata/dox/domains" + "/" + domainKey).then(function(response) {
            $scope.model = response.data;
        });
    }
});