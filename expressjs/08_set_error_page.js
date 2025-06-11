const express=require('express')
const app=express()
const admin_routes=require('./routes/admin_routes')

app.use(admin_routes)
app.use((req,res,next)=>{
    res.status(404).send('<h1> 404 Page Not Found </h1>')
})

app.listen(3000)