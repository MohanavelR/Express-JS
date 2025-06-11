const http = require('http')
const bodyParser=require('body-parser')


const express=require('express')


const app=express()
// Middle Ware Function
app.use(bodyParser.urlencoded()) // parser form data

app.get('/',(req,res,next)=>{
    res.send("<h1>Message</h1> <form action='/home' method='POST' ><input name='title' ><button>Send</button></form> ")
}) 
app.post("/home",(req,res,next)=>{

    console.log("Form Data:",req.body) // get data from body
    console.log("Express Working second Middle ware")
    
    res.send(`<h1>${req.body.title}</h1>`) 
})



app.listen(3000)

console.log("http://127.0.0.1:3000/")