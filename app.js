
 
const express = require('express');
const app=express();

app.use('/Users',(req,res,next)=>{
    console.log('welcome guys');
    res.send('<h1>welcome Users</h1>');
});
app.use('/',(req,res,next)=>{
    console.log('welcome yooooo');
    res.send('<h1>welcome </h1>');
});

app.listen(3000);
 