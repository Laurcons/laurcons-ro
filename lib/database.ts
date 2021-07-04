
import mysql from "mysql";

// let conn: mysql.Connection | null = null;

// let waitingPromiseCallbacks: ([(conn: mysql.Connection) => void, (err: Error) => void])[];

const conn = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
    dateStrings: true
});

export { conn as Mysql };