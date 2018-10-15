const http = require('http');

const server = http.createServer( (req, res) => {
  res.end('Node');
});

server.listen(process.env.PORT || 3000);
