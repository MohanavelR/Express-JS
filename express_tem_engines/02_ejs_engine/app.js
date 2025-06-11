const express=require('express')
const path=require('path')
const router = require('./routes/static')
const { ROOTDIR } = require('./utils/path')
// ---------------
// EJS- Embedded Javascript 
const app=express()
app.set('view engine','ejs')
app.use(express.static(path.join(ROOTDIR,'public')))
app.use(router)
app.use((req,res,next)=>{
   res.status(404).render('404')
})


// -------------------

app.listen(5000)

console.log('Running Port :',"http://127.0.0.1:5000")
