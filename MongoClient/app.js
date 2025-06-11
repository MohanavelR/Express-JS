const express=require('express')
const path=require('path')
const ROOTDIR=require('./utils/path')
const bp=require('body-parser')
const hbs=require('express-handlebars')
const routes = require('./routes/crud')
const DBO=require('./db')

const app=express()
app.use(bp.urlencoded())
app.use(routes)
app.engine('hbs',hbs.engine({
    extname:'.hbs',
    defaultLayout:'base'
}))
app.use(express.static(path.join(ROOTDIR,'public')))
app.set('view engine','hbs')
app.listen(8080,()=>{
    console.log('server is running...')
    console.log('Running Port :http://127.0.0.1:8080  ')
})
