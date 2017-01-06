app.factory('mySharedService', function($rootScope) {
    var sharedService = {};

    sharedService.key = '';

    sharedService.preForBroadcast = function(key) {
        this.key = key;
        this.broadcastItem();
    };

    sharedService.broadcastItem = function() {
        $rootScope.$broadcast('handleBroadcast');
    };

    return sharedService;
})