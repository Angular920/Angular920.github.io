app.service('mySharedService', function() {
    var domainKey = '';

    return {
        getKey: function() {
            return domainKey;
        },
        setKey: function(key) {
            domainKey = key;
        }        
    };
    
});