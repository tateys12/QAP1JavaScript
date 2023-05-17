var http = require('http');
var url = require('url');
var fs = require('fs');

// Creates the server object
http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;

  // Handling different routes
  if (filename === './') {
    filename = './index.html'; // index.html is the default page
  }

  // Static files
  fs.readFile(filename, function (err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end('404 Not Found');
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
