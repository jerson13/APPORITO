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
    'host': 'http://wwww.autorack.proxy.rlwy.net',
    'port': 27199,
    'database': 'railway',
    'user': 'postgres',
    'password':'ETyPrNwxYHQqsxHzvZayFhkuRcxgMYvd'
});

const db = pgp(databaseConfig);

module.exports = db;