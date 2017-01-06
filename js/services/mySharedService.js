app.service('mySharedService', function() {
    var domainKey = '';

    return {

        getKey: function() {
            return key;
        },
        setKey: function(key) {
            domainKey = key;
        }
    };
    
});