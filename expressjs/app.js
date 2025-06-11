const http = require('http')
const bodyParser=require('body-parser')
const ad_routes=require('./routes/admin_routes')
// like Import express
const express=require('express')
/*
this express is a function
get That return value  

*/

const app=express()
// Middle Ware Function
app.use(bodyParser.urlencoded()) // parser form data

// app.get('/message',(req,res,next)=>{
//     res.send("<h1>Message</h1> <form action='/home' method='POST' ><input name='title' ><button>Send</button></form> ")
// }) 
// app.post("/home",(req,res,next)=>{

//     console.log("Form Data:",req.body) // get data from body
//     console.log("Express Working second Middle ware")
//     // res.send("<h1>Home page</h1>")
//     res.send(`<h1>${req.body.title}</h1>`) 
// })

// app.use('/',(req,res,next)=>{
//     console.log("Express Working first Middle ware")
//     res.send("<h1>Index Page</h1>") 
    // next() // you want go to next middle ware must be called this function
// })
app.use(ad_routes) //set Routers 
app.listen(3000)
// const server=http.createServer(app)
// server.listen(3000)
console.log("http://127.0.0.1:3000/")