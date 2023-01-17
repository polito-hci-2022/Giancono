'use strict';
const sqlite = require('sqlite3');

class DB {

    constructor(){
        this.db = new sqlite.Database("giancono.db", (err) => {
            if(err) throw err;
            });
    }
}


    const db = new DB();
    module.exports = db