app.controller('DomainController', function($scope, $http, mySharedService) {

    $http.get("http://dev.nuviot.com/metadata/dox/domains").then(function(response) {
        $scope.info = response.data;
    });

   $scope.passKey = function(key) {
       mySharedService.setKey(key);
       console.log(key);
   }

});