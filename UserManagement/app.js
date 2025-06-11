const express = require('express')
const hbs=require('express-handlebars');
const bp=require('body-parser')
const path=require('path');
const routers = require('./routes/routes');
const session=require('express-session')
const {db}=require('./db')
const flash=require('connect-flash')
require('dotenv').config()
//----------------------------------
const app=express()
app.use(session({secret:'secret',resave:false,saveUninitialized: true})) 
app.use(flash())
// Templates Engine
app.engine('hbs',hbs.engine({ extname:".hbs", defaultLayout:"base",helpers:{
    serial:function(index){
        return index+1
    }
}}))
app.set('view engine','hbs')
// static files
app.use(express.static('public'))
app.use(bp.urlencoded());
// -----------------------------
// routers
app.use(routers)

//----------------------------------
// Port set

app.listen(8080,()=>{
    console.log(`Running on:http://127.0.0.1:8080`)
})