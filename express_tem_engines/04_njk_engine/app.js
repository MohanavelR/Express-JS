const express=require('express')
const path=require('path')
const router = require('./routes/static')
const { ROOTDIR } = require('./utils/path')
const nunjucks=require('nunjucks')
const app=express()
nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
});

// Use `.html` files
app.set('view engine', 'html');

// ---------------


app.use(express.static(path.join(ROOTDIR,'public')))
app.use(router)
app.use((req,res,next)=>{
   res.status(404).sendFile(path.join(ROOTDIR,'views','404.html'))
})


// -------------------

app.listen(5000)

console.log('Running Port :',"http://127.0.0.1:5000")
