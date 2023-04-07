const mysql2 = require("mysql2");

const poolC = mysql2.createPool({
        port: 3306,
        host: process.env.PR_HOST,
        database: process.env.MYSQL_DBNAME,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD
});

const poolPromised = poolC.promise();

module.exports = poolPromised;
