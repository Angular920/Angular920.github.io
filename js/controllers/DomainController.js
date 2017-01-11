app.controller('DomainController', ['$scope', '$http', 'mySharedService', function($scope, $http, mySharedService) {
    
    $http.get("http://dev.nuviot.com/metadata/dox/domains").then(function(response) {
        $scope.info = response.data
    });

    $scope.passKey = function(key) {
        console.log(key);
        mySharedService.showModelList(key);
    }

    $scope.passName = function(domainKey, className) {
        console.log("key:" + domainKey + " name:" + className);
        mySharedService.showModelDetail(domainKey , className); 
    };
}]);