const sqlite = require('node:sqlite');
const DB = new sqlite.DatabaseSync('worky.db');


// Create the Users table
const UsersDDL = DB.prepare('CREATE TABLE IF NOT EXISTS Users (ID INTEGER PRIMARY KEY AUTOINCREMENT, COD_USERNAME TEXT NOT NULL, COD_PASSWORD TEXT NOT NULL, COD_EMAIL TEXT)');
UsersDDL.run();

