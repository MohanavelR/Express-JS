const http = require('http')
const bodyParser=require('body-parser')
const express=require('express')
const app=express()
app.use(bodyParser.urlencoded()) 
app.use('/message',(req,res,next)=>{
    res.send("<h1>Message</h1> <form action='/home' method='POST' ><input name='title' ><button>Send</button></form> ")
}) 
app.use("/home",(req,res,next)=>{
    console.log("Form Data:",req.body) // get data from body
    console.log("Express Working second Middle ware")
    res.send(`<h1>${req.body.title}</h1>`) 
})


app.listen(3000)
