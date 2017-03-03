var HelloWorld = require('./HelloWorld.js');

var cb = (err, greeting) => console.log(greeting);
var api = new HelloWorld.default;
api.on('again', cb);
api.welcome(cb);
