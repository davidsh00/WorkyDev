const sqlite = require('node:sqlite');
const DB = new sqlite.DatabaseSync('worky.db');


// Create the Users table
const UsersDDL = DB.prepare('CREATE TABLE IF NOT EXISTS Users (ID INTEGER PRIMARY KEY AUTOINCREMENT, COD_USERNAME TEXT NOT NULL, COD_PASSWORD TEXT NOT NULL, COD_EMAIL TEXT)');
UsersDDL.run();

// Create the Projects table
const ProjectsDDL = DB.prepare('CREATE TABLE IF NOT EXISTS Projects (ID INTEGER PRIMARY KEY AUTOINCREMENT, NAM_PROJECT TEXT, USER_ID INTEGER NOT NULL, FOREIGN KEY ("USER_ID") REFERENCES "Users"("ID"))');
ProjectsDDL.run();

// Create the Works table
const WorksDDL = DB.prepare('CREATE TABLE IF NOT EXISTS Works (ID INTEGER PRIMARY KEY AUTOINCREMENT, DAT_START TEXT, DAT_END TEXT, USER_ID INTEGER NOT NULL, FOREIGN KEY ("USER_ID") REFERENCES "Users"("ID"))');
WorksDDL.run();

// Create the WorkProjects table
const WorkProjectsDDL = DB.prepare('CREATE TABLE IF NOT EXISTS Workprojects (ID INTEGER PRIMARY KEY AUTOINCREMENT, WORK_ID INTEGER NOT NULL, PROJECT_ID INTEGER NOT NULL, FOREIGN KEY ("WORK_ID") REFERENCES "Work"("ID"), FOREIGN KEY ("PROJECT_ID") REFERENCES "Projects"("ID"))');
WorkProjectsDDL.run();