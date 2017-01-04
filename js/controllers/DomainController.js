app.controller('DomainController', function($scope, $http, domainKeyService) {

    $scope.ShowModels = function(key) {
        domainKeyService.PrepPassKey(key);
    };

    $scope.$on('pass', function () {
        console.log(KeyService.key)
    })

    $http.get("http://dev.nuviot.com/metadata/dox/domains").then(function(response) {
        $scope.info = response.data;
    });
});