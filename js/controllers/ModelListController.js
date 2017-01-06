app.controller('ModelListController', function($scope, $http, mySharedService) {

    $http.get("http://dev.nuviot.com/metadata/dox/domains" + "/").then(function(response) {
        $scope.model = response.data;
    });

    $scope.$on('handleBroadcast', function() {
        $scope.key = mySharedService.key;
    });

    console.log(key);
});