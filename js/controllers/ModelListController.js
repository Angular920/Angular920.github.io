app.controller('ModelListController', function($scope, $http) {

    $http.get("http://dev.nuviot.com/metadata/dox/domains" + "/" ).then(function(response) {
        $scope.model = response.data;
    });
});