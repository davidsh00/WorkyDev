const express = require('express');

const app = express();
const port = 3000;

// APIs about login
app.get('/api/loginuser',(req,res) =>{

})
app.update('/api/changepassword',(req,res) =>{
    
})

// APIs about the main page
app.get('/api/dashboardvalues/{user_id}',(req,res) =>{
    
})
app.get('/api/userworks/{user_id}',(req,res) =>{
    

// APIs about CRUD on work table    
})
app.post('/api/insertwork',(req,res) =>{
    
})
app.update('/api/updatework',(req,res) =>{
    
})
app.delete('/api/deletework',(req,res) =>{
    
})


app.listen(port,() => {
    console.log(`Express app running on port ${port}`);
})