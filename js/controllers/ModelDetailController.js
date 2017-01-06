app.controller('ModelDetailController', ['$scope', '$http', 'mySharedService', function($scope, $http, mySharedService) {
    $scope.init = function() {
        console.log("ModelDetail Loaded");
        mySharedService.showModelDetail = function(domainKey, className) {
            console.log("HERE IS MY KEY AND NAME: " + domainKey + " AND " + className);
            $http.get("http://dev.nuviot.com/metadata/dox/entity" + "/" + domainKey + "/" + className).then(function(response) {
                $scope.details = response.data;
            });
        };
    };
}]); 