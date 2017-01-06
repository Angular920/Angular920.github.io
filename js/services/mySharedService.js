app.service('mySharedService', function() {
    var KEY = '';
    var CLASSNAME = '';
    var DOMAINKEY = '';

    return {
        getKey: function() {
            return KEY, CLASSNAME, DOMAINKEY;
        },
        setKey: function(key, className, domainKey) {
            KEY = key;
            NAME = className;
            DOMAINKEY = domainKey;
        }        
    };
    
});