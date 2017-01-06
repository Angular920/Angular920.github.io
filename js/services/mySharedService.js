app.service('mySharedService', function() {
    var domainKey = '';

    console.log(domainKey);

    return {

        getKey: function() {
            return key;
        },
        setKey: function(key) {
            domainKey = key;
        }
    };
    
});