const express = require('express');
const sqlite = require('node:sqlite');
const DB = new sqlite.DatabaseSync('worky.db');

const app = express();
const port = 3000;

app.use(express.json());

// APIs about login
app.post('/api/loginuser',(req,res) =>{
    const login_query = DB.prepare('SELECT ID FROM Users WHERE COD_USERNAME = ? AND COD_PASSWORD = ?');
    const result = login_query.all(req.body.username,req.body.password);
    if(result.length == 1)
    {
        res.status(200).json({result:"success",user_id:result[0].ID});
    }
    else
    {
        res.status(400).json({result:"username or password is incorrect."});
    }
})

app.post('/api/changepassword',(req,res) =>{
    const login_query = DB.prepare('SELECT ID FROM Users WHERE COD_EMAIL = ?');
    const result = login_query.all(req.body.email);
    if(result.length == 1)
    {
        // res.status(200).json({result:"success",user_id:result[0].ID});
        const update_password_query = DB.prepare('UPDATE Users SET COD_PASSWORD = ? WHERE ID = ?');
        const update_result = update_password_query.run(req.body.password,result[0].ID);
        if(update_result.changes == 1)
        {
            res.status(200).json({result:"success"});
        }
        else
        {
           res.status(400).json({result:"bad request"}); 
        }
    }
    else
    {
        res.status(400).json({result:"bad request"});
    }    
})

// APIs about the main page
app.get('/api/dashboardvalues/:userId',(req,res) =>{

    function duration(startEpoch, endEpoch)
    { 
        //TODO: calculate the hours between the two timestamps
    }

    // to get the parameters specified in the url segment (eg. userId) you use the req.params object
    const userId = req.params.userId;

    if(!userId) {res.status(400).json({result:"failed",error:"the user id was not specified"});}

    // Get the project_count
    const project_count_query = DB.prepare('SELECT COUNT(*) AS C FROM Projects WHERE USER_ID = ?');
    const project_count = project_count_query.all(userId)[0].C; // project_count is an array of rows and the column that contains the count is called 'C'

    // Get work_count
    const work_count_query = DB.prepare('SELECT COUNT(*) AS C FROM Works WHERE USER_ID = ?');
    const work_count = project_count_query.all(userId)[0].C;

    // TODO: calculate hours count
    // // Get hours_count
    // const hours_count_query = DB.prepare('SELECT * FROM Works WHERE USER_ID = ?');
    // const hours_count = project_count_query.all(userId);

    res.status(200).json({project_count:project_count,work_count:work_count,hours_count:0});
})


app.get('/api/userworks/{user_id}',(req,res) =>{
    

// APIs about CRUD on work table    
})
app.put('/api/insertwork',(req,res) =>{
    
})
app.post('/api/updatework',(req,res) =>{
    
})
app.delete('/api/deletework',(req,res) =>{
    
})


app.listen(port,() => {
    console.log(`Express app running on port ${port}`);
})