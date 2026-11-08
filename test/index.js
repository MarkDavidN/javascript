

var http = require('http');
http.createServer(function (req, res) {
    res.write('Hello World!'); //write a response to the client
    res.end(); 
}).listen(8000, function () {
  console.log('Server is running at http://localhost:8000');
});