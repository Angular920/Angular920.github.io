app.controller('DomainController', function($scope, $http, mySharedService) {

    $http.get("http://dev.nuviot.com/metadata/dox/domains").then(function(response) {
        $scope.info = response.data;
    });

    $scope.passKey = function(key) {
        mySharedService.prepForBroadcast(key);
        console.log("passKey" + key)
    };

    $scope.$on('handleBroadcast', function() {
        $scope.domainKey = mySharedService.domainkey
        console.log("on" + domainkey)
    })

});