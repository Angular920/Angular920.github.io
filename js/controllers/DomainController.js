app.controller('DomainController', function($scope, $http, mySharedService) {

    $http.get("http://dev.nuviot.com/metadata/dox/domains").then(function(response) {
        $scope.info = response.data;
    });

    $scope.clickMe = function() {
        console.log('Hello World');
    };

});