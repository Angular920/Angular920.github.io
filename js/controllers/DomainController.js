app.controller('DomainController', function($scope, $http, domainKeyService) {

    $http.get("http://dev.nuviot.com/metadata/dox/domains").then(function(response) {
        $scope.info = response.data;
    });
});