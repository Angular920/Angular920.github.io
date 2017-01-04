app.controller('DomainController', function($scope, $http) {

    console.log(key)

    $http.get("http://dev.nuviot.com/metadata/dox/domains").then(function(response) {
        $scope.info = response.data;
    });
});