const express=require('express')
const routes=require("./routes/admin_routes")
const path=require('path')
const ROOTDIR = require('./utlis/path')
const app=express()
app.use(express.static(path.join(ROOTDIR,'public')))

app.use(routes)
app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(ROOTDIR,'views',"404.html"))
})
app.listen(3000)