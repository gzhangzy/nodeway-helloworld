var requireFromUrl = require('require-from-url');

requireFromUrl("https://nodeway.org/HelloWorld.js")
   .on('Resolved', function(next, HelloWorld) {
        var cb = (err, greeting) => console.log(greeting);
        var api = new HelloWorld.default;
        api.on('again', cb);
        api.welcome(cb);
    })
   .on('Rejected', function(next, e) {
        console.log(e);
    });
