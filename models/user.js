const db = require('../config/config');

const user = {};

user.getAll = () => {
    const sql = `
        SELECT * FROM users
    `;


    return db.manyOrNone(sql);
};

module.exports = user;