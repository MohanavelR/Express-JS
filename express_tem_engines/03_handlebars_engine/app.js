const express=require('express')
const path=require('path')
const router = require('./routes/static')
const { ROOTDIR } = require('./utils/path')
const { engine } = require('express-handlebars')
// ---------------

const app=express()
app.engine('hbs',engine({
   extname:'.hbs',
   defaultLayout:'base'
}))
app.set('view engine' ,'hbs')
app.use(express.static(path.join(ROOTDIR,'public')))
app.use(router)
app.use((req,res,next)=>{
   res.status(404).sendFile(path.join(ROOTDIR,'views','404.html'))
})


// -------------------

app.listen(5000)

console.log('Running Port :',"http://127.0.0.1:5000")
