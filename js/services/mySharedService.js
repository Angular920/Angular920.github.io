app.factory('mySharedService', function($rootScope) {
    var sharedService = {};

    sharedService.key = '';

    sharedService.prepForBroadcast = function(key) {
        this.key = key;
        this.broadcastItem();
        console.log(this.key);
    };

    sharedService.broadcastItem = function() {
        $rootScope.$broadcast('handleBroadcast');
    };

    return sharedService;
});