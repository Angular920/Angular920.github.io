app.controller('ModelListController', function($scope, $http, shareDataService) {

    $scope.key = shareDataService.getList();

    $http.get("http://dev.nuviot.com/metadata/dox/domains" + "/" + $scope.key).then(function(response) {
        $scope.model = response.data;
        console.log(URL);
    });
});