const sqlite = require('node:sqlite');
const DB = new sqlite.DatabaseSync('worky.db');


// Create the Users table
const UsersDDL = DB.prepare('CREATE TABLE IF NOT EXISTS Users (ID INTEGER PRIMARY KEY AUTOINCREMENT, COD_USERNAME TEXT NOT NULL, COD_PASSWORD TEXT NOT NULL, COD_EMAIL TEXT)');
UsersDDL.run();

// Create the Projects table
const ProjectsDDL = DB.prepare('CREATE TABLE IF NOT EXISTS Projects (ID INTEGER PRIMARY KEY AUTOINCREMENT, NAM_PROJECT TEXT, USER_ID TEXT NOT NULL, FOREIGN KEY ("USER_ID") REFERENCES "Users"("ID"))');
ProjectsDDL.run();

// Create the Works table
const WorksDDL = DB.prepare('CREATE TABLE IF NOT EXISTS Works (ID INTEGER PRIMARY KEY AUTOINCREMENT, DAT_START TEXT, DAT_END TEXT, USER_ID TEXT NOT NULL, FOREIGN KEY ("USER_ID") REFERENCES "Users"("ID"))');
WorksDDL.run();