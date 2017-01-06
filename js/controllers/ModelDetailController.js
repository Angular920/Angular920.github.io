app.controller('ModelDetailController', ['$scope', '$http', 'mySharedService', function($scope, $http, mySharedService) {
    $scope.init = function() {
        console.log("ModelDetail Loaded");
        mySharedService.showModelDetail = function(domainKey, name) {
            console.log("HERE IS MY KEY AND NAME: " + domainKey + " AND " + name);
            
        };
    };
}]); 