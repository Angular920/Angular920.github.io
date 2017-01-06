var app = angular.module('angularApp',[]);


app.controller('TestCtrl', function($scope) {
    $scope.clickMe = function() {
        console.log('hello world');
    }
});