app.controller('enResourceController', ['$scope', '$http', 'mySharedService', function($scope, $http, mySharedService) {
    $http.get("http://dev.nuviot.com/app/resources/resource.en.js").then(function(response) {
        $scope.english = response.data
    });
}]);