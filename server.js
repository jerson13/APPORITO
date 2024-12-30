const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const logger = require('morgan');
const cors = require('cors');


const port = process.env.PORT || 3000;
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ 
    extended: true 
}));

app.use(cors());

app.disable('x-powered-by');

app.set('port', port);

server.listen(3000, '192.168.18.9' || 'localhost', function(){
    console.log('Server listening on port ' + server.address().port + 'imiciado');
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

//error

app.use((req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack);
    res.status(404).send('Sorry cant find that!');

});