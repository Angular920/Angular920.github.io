app.controller('DomainController', function($scope, $http, mySharedService) {

    $http.get("http://dev.nuviot.com/metadata/dox/domains").then(function(response) {
        $scope.info = response.data;
    });

    $scope.passKey = function(key) {
        sharedService.prepForBroadcast(key);
        console.log("passKey" + key)
    };

    $scope.on('handleBroadcast', function() {
        $scope.domainKey = sharedService.domainkey
        console.log("on" + domainkey)
    })

});