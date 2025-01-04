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
    'host': 'postgresql://postgres:ETyPrNwxYHQqsxHzvZayFhkuRcxgMYvd@autorack.proxy.rlwy.net:27199/railway',
    'port': 5432,
    'database': 'railway',
    'user': 'postgres',
    'password':'ETyPrNwxYHQqsxHzvZayFhkuRcxgMYvd'
});

const db = pgp(databaseConfig);

module.exports = db;