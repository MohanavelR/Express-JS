const {routes}= require('./routes/content')
const {ROOTDIR}=require("./utils/path")
const express=require('express')
const path=require('path')
const multer=require('multer')
// --------------------------\\

const app=express()
app.use(express.static(path.join(ROOTDIR,"public")))  
app.use(routes)
// Multer
const ds= multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'media')
    },filename:function(req,file,cb){
         cb(null,file.fieldname+"_"+String(Date.now())+path.extname(file.originalname))

    }
 })  

 let max=2*1000*1000
 let upload=multer(
    {
        storage:ds,
        limits:{
            fileSize:max
        },
        fileFilter:function(req,file,cb){
          let file_type= /jpeg|jpg|png/;
          let mimetype=file_type.test(file.mimetype)
          let extname=file_type.test(path.extname(file.originalname).toLowerCase())
          if (mimetype && extname){
               return cb(null,true)
          }
          cb("error: File Upload only supports following : "+file_type)
        }
    }
 ).single('mypic')
//  ---------------\\

routes.post("/upload",(req,res,next)=>{
    upload(req,res,function(err){
      if (err){
         res.send(`<h1 style='color:red' >${err}</h1>`)
      }
      else{
         res.send("<h1 style='color:green' >Successfully Image Uploaded..</h1>")
      }
    })
})

// ---------------------------\\
// Running server
app.set('view engine','ejs')
app.listen(2000)

// Console


console.log(" Express App Running.....")
console.log(" Running : http://127.0.0.1:2000")