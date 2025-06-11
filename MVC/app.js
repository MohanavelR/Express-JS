const express = require('express')
const path = require('path')
const hbs = require('express-handlebars')
const routes = require('./routes/user_routes')
const bp=require('body-parser')
const app=express()
app.engine('hbs',hbs.engine({
   extname:'.hbs',
   defaultLayout:'base' 
}))
app.use(bp.urlencoded())
app.set('view engine','hbs')
app.use(routes)
app.listen(8080,()=>{
    console.log('Running Post : http://127.0.0.1:8080')
})