const express=require('express')
const admin_router = require('./routes/admin_routes')

const app=express()

app.use('/admin',admin_router)
app.listen(3000)