app.controller('ModelListController', ['$scope', '$http', 'mySharedService', function($scope, $http, mySharedService) {
    $scope.init = function() {
        console.log("ModelList Loaded");
        mySharedService.showModelList = function(key) {
            console.log("HERE IS MY KEY: " + key);
            $http.get("http://dev.nuviot.com/metadata/dox/domains" + "/" + key).then(function(response) {
                $scope.model = response.data;
            })
        };
    };

    $scope.passName = function(domainKey, name) {
        console.log("key:" + domainKey + " name:" + name);
        mySharedService.showModelDetail(domainKey , name); 
    };
}]);