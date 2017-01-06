app.controller('DomainController', function($scope, $http, mySharedService) {

    $http.get("http://dev.nuviot.com/metadata/dox/domains").then(function(response) {
        $scope.info = response.data;
    });

    $scope.passKey = function(key) {
        mySharedService.prepForBroadcast(key);
        console.log(key);
    };
    $scope.$on('handleBroadcast', function() {
        $scope.key = mySharedService.key;
        console.log($scope.key);
    });

    $scope.clickMe() = function()
    {
        console.log('hello world');
    };

});