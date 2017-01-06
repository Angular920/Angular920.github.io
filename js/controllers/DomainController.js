app.controller('DomainController', function($scope, $http) {

    $scope.passKey = function(key) {
        mySharedService.preForBroadcast(key);
    };
    $scope.$on('handleBroadcast', function() {
        $scope.key = mySharedService.key;
    });

    $http.get("http://dev.nuviot.com/metadata/dox/domains").then(function(response) {
        $scope.info = response.data;
    });
});