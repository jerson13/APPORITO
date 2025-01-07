const promise = require('bluebird');
const { query } = require('express');
const options = {
    promiseLib: promise,
    query: (e) => {
    }
};


const pgp = require('pg-promise')(options);
const types = pgp.pg.types;

types.setTypeParser(1114, function(stringValue) {
    return stringValue;
});

const databaseConfig = pgp({
    'host': 'autorack.proxy.rlwy.net',
    'port': 27199,
    'database': 'railway',
    'user': 'postgres',
    'password':'ETyPrNwxYHQqsxHzvZayFhkuRcxgMYvd'
});
// Verificar conexión
databaseConfig
    .connect()
    .then((obj) => {
        obj.done(); // Liberar conexión
        console.log('Conexión exitosa a la base de datos.');
    })
    .catch((error) => {
        console.error('Error al conectar a la base de datos:', error.message || error);
    });
const db = pgp(databaseConfig);

module.exports = db;