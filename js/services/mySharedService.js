app.service('mySharedService', function() {
    var domainKey = '';

    console.log(domainKey);

    return {
        getKey: function() {
            return domainKey;
        },
        setKey: function(key) {
            domainKey = key;
        }        
    };
    
});