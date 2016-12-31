app.controller('ModelController', function($scope, $http, $attrs) {
    $http.get("http://dev.nuviot.com/metadata/dox/domains").then(function(response) {
        $scope.model = response.data;
    });
});