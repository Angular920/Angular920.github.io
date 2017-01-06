app.service('mySharedService', function() {
    var KEY = '';
    var NAME = '';
    var DOMAINKEY = '';

    return {
        getKey: function() {
            return KEY, NAME, DOMAINKEY;
        },
        setKey: function(key, name, domainKey) {
            KEY = key;
            NAME = name;
            DOMAINKEY = domainKey;
        }        
    };
    
});