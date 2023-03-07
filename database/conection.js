const knex = require('knex')({
    client: 'mysql2',
    connection: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'dani039808',
        database: 'db_regdigital'
    }
});

module.exports = knex