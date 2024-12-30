const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const port = process.env.PORT || 3000;

app.set('port', port);

server.listen(3000, '174.142.60.54' || 'localhost', function(){
    console.log('Server listening on port ' + server.address().port + 'imiciado');
});
