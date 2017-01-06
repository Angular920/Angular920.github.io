app.service('mySharedService', function() {
    var domainKey = '';

    return {
        getKey: function() {
            console.log(domainKey);
            return domainKey;
        },
        setKey: function(key) {
            domainKey = key;
            
        }        
    };
    
});