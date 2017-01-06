app.controller('ModelListController', function($scope, $http, mySharedService) {

    $http.get("http://dev.nuviot.com/metadata/dox/domains" + "/").then(function(response) {
        $scope.model = response.data;
    });

    $scope.getKey = function() {
        $scope.domainKey = mySharedService.getKey();
    };

    console.log(getKey);
});