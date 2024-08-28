const { createPool } = require('mysql2')

const pool = createPool({
    port: process.env.MYSQLPORT,
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    connectionLimit: 10
})

module.exports = pool