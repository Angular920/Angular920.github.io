app.factory('mySharedService', function($rootScope) {
    var mySharedService = {};

    mySharedService.domainkey = '';

    mySharedService.prepForBroadcast = function(key) {
        this.domainkey = key;
        this.broadcastItem();
    };

    mySharedService.broadcastItem = function() {
        $rootScope.$broadcastItem('handleBroadcast');
    };

    return mySharedService;
});