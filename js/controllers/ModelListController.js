app.controller('ModelListController', ['$scope', '$http', 'mySharedService', function($scope, $http, mySharedService) {
    $scope.init = function() {
        console.log("FOO");
        mySharedService.showModelList = function(key) {
            console.log("HERE IS MY KEY: " + key);
            $http.get("http://dev.nuviot.com/metadata/dox/domains" + "/" + key).then(function(response) {
                $scope.model = response.data;
            })
        };
    };
}]);