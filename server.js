const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const logger = require('morgan');
const cors = require('cors');

const users = require('./routes/userRoutes');




const port = process.env.PORT || 3000;
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ 
    extended: true 
}));

app.use(cors());

app.disable('x-powered-by');

app.set('port', port);

users(app);

server.listen(port, '0.0.0.0', function() {
    console.log('Server listening on port ' + port + ' iniciado');
});



/*app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/test', (req, res) => {
    res.send('ruta del test!');
});*/

//error

app.use((req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack);
    res.status(404).send('Sorry cant find that!');

});

module.exports = {
    app: app,
    server: server
}