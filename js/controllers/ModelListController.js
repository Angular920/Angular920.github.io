app.controller('ModelListController', ['$scope', '$http', 'mySharedService', function($scope, $http, mySharedService) {
    $scope.init = function() {
        console.log("FOO");
        mySharedService.showModelList = function(key) {
            console.log("HERE IS MY KEY: " + key);
        };
    };
}]);