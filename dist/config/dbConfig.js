"use strict";
const mysql2 = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

class Connection {
    constructor() {
        this.config = {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            port: Number(process.env.DB_PORT),
            database: process.env.DB_NAME,
        };
        this.pool = mysql2.createPool(this.config);
    }

    getConnection() {
        return this.pool.promise();
    }
}

module.exports = new Connection();
