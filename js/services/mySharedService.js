app.service('mySharedService', function() {
    var domainKey = '';

    console.log(key);

    return {

        getKey: function() {
            return key;
        },
        setKey: function(key) {
            domainKey = key;
        }
    };
    
});