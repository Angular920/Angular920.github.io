app.factory('domainKeyService', function ($rootScope) {
    var KeyService = {};

    KeyService.key = '';

    KeyService.PrepPassKey = function (Key) {
        this.key = Key;
        this.PassKey();
    };

    KeyService.PassKey = function () {
        $rootScope.$pass('passkey')
    };

    return KeyService;
});