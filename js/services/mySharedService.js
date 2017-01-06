app.factory('mySharedService', function($rootScope) {
    var sharedService = {};

    sharedService.key = '';

    sharedService.prepForBroadcast = function(key) {
        this.key = key;
        this.broadcastItem();
    };

    sharedService.broadcastItem = function() {
        $rootScope.$broadcast('handleBroadcast');
    };

    console.log('hello world');

    return sharedService;
});