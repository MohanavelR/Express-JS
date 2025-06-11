const express=require('express')
const app=express()
const admin_routes=require('./routes/admin_routes')

app.use(admin_routes)
app.listen(3000)