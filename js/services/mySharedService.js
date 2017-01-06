app.factory('mySharedService', function($rootScope) {
    var sharedService = {};

    sharedService.domainkey = '';

    sharedService.prepForBroadcast = function(key) {
        this.domainkey = key;
        this.broadcastItem();
    };

    sharedService.broadcastItem = function() {
        $rootScope.$broadcastItem('handleBroadcast');
    };

    return sharedService;
});