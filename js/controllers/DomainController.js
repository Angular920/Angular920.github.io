app.controller('DomainController', function($scope, $http) {

    $http.get("http://dev.nuviot.com/metadata/dox/domains").then(function(response) {
        $scope.info = response.data;
    });
    
   app.controller('ModelListController', function($scope, $http) {
        $scope.search = function(param) {
            $http.get("http://dev.nuviot.com/metadata/dox/domains" + "/" + param).then(function(response) {
                $scope.model = response.data;
            });
        };
   });
});