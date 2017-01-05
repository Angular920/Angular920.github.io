app.controller('DomainController', function($scope, $http, shareDataService) {

    $http.get("http://dev.nuviot.com/metadata/dox/domains").then(function(response) {
        $scope.info = response.data;
    });

    $scope.passKey = function(key) {
        shareDataService.addList($scope.passKey);
    };
});